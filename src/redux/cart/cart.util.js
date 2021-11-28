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

export const removeItemFromCart = function (cartItems, cartItemToRemove) {
  // there is cant be undefined in result as decrease can be call only on exsiting item
  // and function is not completely pure, it rely on fact (provide by addItemToCart) that there is only one item with this ID
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //if this is last cart item, we remove it from array of cart items
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // if there is a item with quantity more then 1 return rebuilded array but decrease quantity of cartItemToRemove by -1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
