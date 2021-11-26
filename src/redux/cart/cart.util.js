/** Check if cartItemToAdd is exist in cartItems array, if so increment cartItem.quantity else create cartItem.quantity=1
 *
 * @param {Object[]} cartItems Array of all cart items
 * @param {Object} cartItemToAdd Newly aquired cart item
 *
 * @returns New array of cartItems objects
 */

export const addItemToCart = function (cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //first quantity key will be added if general return
        : cartItem;
    });
  }
  // in "if" we grant return so else can be omitted
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
