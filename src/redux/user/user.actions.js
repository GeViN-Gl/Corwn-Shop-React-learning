/**Transform user object in correct format for corresponding reducer fuction
 *
 * @param {Object|null} user Any state of user object that we created, can be user from firebase.auth, snapshot, logof or null
 * @description type = SET_CURRENT_USER
 * @returns Object in correct format for corresponding reducer fuction
 */

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
