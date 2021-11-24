import React, { useEffect } from "react";
import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.components";

//Still trnsfer router from v5 to v6
import { useSelector } from "react-redux"; // to access user from state
import { useNavigate, useResolvedPath } from "react-router-dom"; //to use navigate

const SignInAndSigUpPage = () => {
  const user = useSelector((state) => state.user.currentUser); //redux hook, still may be improved with deconstruction like {user} instead of state.user
  const navigate = useNavigate();
  let homePath = useResolvedPath("/");
  // console.log(user);

  // тут борьба с олдскулами componentDidUpdate одним хуком
  // Мысль: КАК только сработает всё равно что DidMount / DidUpdate мы просим ReactRouter перебросить на главную
  useEffect(() => {
    if (user) navigate(homePath);
  });

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

//Redux

// const mapStateToProps = ({ user }) => {
//   return { currentUser: user.currentUser };
// };

// export default connect(mapStateToProps)(SignInAndSigUpPage);
export default SignInAndSigUpPage;
