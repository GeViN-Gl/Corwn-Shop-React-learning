// React
import React, { Component } from "react";

// Router
import { Routes, Route, Outlet } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSigUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";

// Firebase methods
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"; //to pass into dispatch

//Reselect
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  // all fancy thigs we do as soon as we know that component exist on page
  componentDidMount() {
    // onAuthStateChanged return firebase.unsubscribe, and we can call it to signout user
    // also callback of auth must be async as createUserProfile is async fuction and will return promise

    // Именно здесь мы получаем объект userAuth т.е. пользователя прошедшего авторизацию
    // Доступ к нему нам дают методы firebase.auth
    // Метод firebase.auth.onAuthStateChanged это observer вызывающий внутри себя async callback при наступлении события SignIN/OUT
    // и именно этот метод передаёт внуть callback`a объект userAuth
    //
    // так же этот же метод вернет функцию firebase.unsubscribe которая снимает порожденный методом обсервер
    // мы сохраним её для вызова в componentWillUnmount() этого Реакт компонента для предотвращения memory leak
    // -----------
    // ----------- Redux
    // ----------- как и откуда появился setCurrentUser объяснено ниже в вызове  userRef.onSnapshot
    // ----------- тут просто деструктор для удобства
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // Тут сложный вызов с гвардом потом
      // Если принятый от firebase.auth userAuth !== null мы вызовом createUserProfileDocument либо создадим новую запись в базе
      // либо обратимся к уже существующей
      // но если auth() вернет userAuth === null нам надо передать это в state что будет сделано в else этого if

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /* 
        We can listen to a document with the onSnapshot() method.
        An initial call using the callback provided creates a document snapshot immediately with the current contents of the single document.
        Then, each time the contents change, another call updates the document snapshot.*/

        userRef.onSnapshot((snapShot) => {
          // Главня задача всей этой магии в том чтобы с импользованием Redux изменять user-slice главного State
          setCurrentUser(
            // setCurrentUser попал в props благодаря connect() методу Redux
            // Очередность
            // 1. setCurrentUser который живёт в user.actions.js будет вызван и добавит type: "SET_CURRENT_USER" к объекту который ему передадут и вернет т.н. action object
            // 2. Потом в user.reducer.jsx switch перебирая (action.type) найдёт case "SET_CURRENT_USER"
            //    и вернет измененный объект
            //          return {
            //                  ...state,
            //                  currentUser: action.payload,
            //                 };
            // синтаксис тут ОООЧЕНЬ странный и выглядеть с хуками будет совсем по другому, поэтому просто оставлю это как reference
            // UPD
            // С хуками это вообще никак не выглядит, этого просто нет, не нужно ломать голову с логикой вызова highOrder функций
            // Маленький useSelector достаёт всё что нужно
            //
            // собственно указываем переданный в action.payload объект
            {
              id: snapShot.id,
              ...snapShot.data(),
            }
          );

          //------------------------------- BEFORE REDUX
          // this.setState(
          //   {
          //       currentUser: {
          //         id: snapShot.id,
          //         ...snapShot.data(), // .data() returns object with all data from db, so put all it in state
          //       },
          //         }

          // );
        });
      }
      // 1st ELSE important, or null or exsis NOT both
      // 2nd (just to remember) if else fired userAuth is null
      else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    //call unsubscribe to prevent memory leak
    this.unsubscribeFromAuth();
  }

  render() {
    //1. Header, 2do: it actually a navigation bar so covert to nav
    //2. Routes, when converted from reactroute v5 to v6 <SWITCH> becomes <ROUTES>, and many other changes
    //3. DONE hooks+redux+reselect (X)(TODO send down state with currentUser)
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          {/* MEMO You'll only need the trailing * when there is another <Routes> somewhere in that route's descendant tree. 
            In that case, the descendant <Routes> will match on the portion of the pathname that remains */}
          <Route path="/signin" element={<SignInAndSigUpPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }
}

/** For dispatch we import action that describe WHAT dishpath need to do
 * @example
 * const mapDispatchToProps = (dispatch) => ({
 * setCurrentUser: (user) => dispatch(setCurrentUser(user)),
 * });
 *
 * @function .dispatch() это метод Redux который словит action объект (мы сами его создаём) например здесь это
 * @example const setCurrentUser = (user) => ({
 * type: "SET_CURRENT_USER",
 * payload: user,
 * });
 *
 * По сути именно .dispatch() будет передавать в root-reducer строку type на которую должен откликнуться какой-нибуть редьюсер и чтото делать со State
 *
 * Т.е. написанная нами setCurrentUser(user) принимает в качестве агрумента user но возвращает action object и вызывая её мы переставляем user в поле payload и добавляем action
 *
 * и это все (user) => dispatch(setCurrentUser(user)) вернет объект который примет dispatch метод
 * То как сделал это преподаватель конечно через опу, одинаковые имена для параметров и методов это изврат но и сильно путает, но надо просто вкурить...
 *
 * @param {*} dispatch
 * @returns
 */

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Redux подписка на user-slice part of State
// С точки зрения удобоваримости при обучении лучше писать
// const mapStateToProps =(state) => {
//   currentUser: state.user.currentUser
// }
// Но идея всё та же, connect() подписывает на App на возможность доступа к State as props
// так же я постоянно меняю круглые скобуки в стрелочных функциях на явное указание return
// я не знаю кто и зачем придумал писать стрелочки как () => () но читать такой код тяжело

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//We dont need to read from state, so we omit firs argument in connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
