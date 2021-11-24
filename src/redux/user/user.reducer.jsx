import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null, //base state for user
}; // NOTE defaul value in func fires on udefined, null actually a value

/** Redux reducer that cares about userState
 *
 * @param {Object} state Initial (previos) state of global state
 * @param {String} action.type Type of action that we want to reducer do
 * @param {String} action.payload Action that we want to reducer do
 * @returns New user state in form of object, each switch/case always spread initial state and then redefines data than will be changed according to action.payload
 *
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
