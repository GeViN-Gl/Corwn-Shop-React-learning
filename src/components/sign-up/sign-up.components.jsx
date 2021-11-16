import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import React, { Component } from "react";

/**
 * Sign Up React-class .
 * @extends React.Component
 */

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  /** Handle create user from sign-up form.
   * Takes newly inputed data from form and try to create new user with
   * createUserWithEmailAndPasswor method from firebas.auth
   * @async
   * @param {Object} event Form "submit" event
   * @todo Make better error handling
   */
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    //first of all check if pass match

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      //return (if no error) userCredential obj, as we need only user from it -> destruct and call our createUserProfile method
      await createUserProfileDocument(user, { displayName });

      //if there is no error clear form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  /** Nice little arrow to live-change values in this.state according to form input
   *
   *
   * @param {Object} event Event object for any form field it is attached to
   * @todo Almost same fuction as in signIn, mb need to refactor
   */
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I don`t have an account</h2>
        <span className="sign-up__sub-title">Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm assword"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
