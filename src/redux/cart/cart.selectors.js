import { createSelector } from "reselect";

/** Input selector (see lecturre 133) library reselect
 *
 * @param {Object} state Global state provided to selector
 * @returns State.cart as a slice of global state
 */
const selectCart = (state) => state.cart;
// судя по обяснениям селекторы тоже могут работать по принципу дома который построил Джек
// Первый, который SelectCart берет данные из State на 1 уровень глубины, до state.cart
// Второй, уже будучи output, достаёт из первого уже cart.cartItems
// и наконец третий уже вызывается с реальным действием и дожен вернуть результат стрелочки

/** (Cart selector) from "reselect";
 * @argument {object} State from redux global State
 * @returns array of objects {cartItems} from state.cart
 */

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

/** (Cart selector) from "reselect";
 * @argument {object} State from redux global State
 * @returns Summarize all state.cart.cartItems.quantity
 */
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
);
/** (Cart selector)
 *
 * @returns Total price for all state.cart.cartItems array items as sum of (cartItem.quantity * cartItem.price)
 */
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);
