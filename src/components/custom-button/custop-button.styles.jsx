import styled, { css } from "styled-components";

const googleBlue = "#4285f4";
const googleBlueDark = "#357ae8";

const colorWhite = "#fff";
const colorBlack = "#000";

// here lives conflicting default styles rules
const buttonStyles = css`
  background-color: ${colorBlack};
  color: ${colorWhite};
  border: none;

  &:hover {
    background-color: ${colorWhite};
    color: ${colorBlack};
    border: 1px solid ${colorBlack};
  }
`;

const invertedButtonStyles = css`
  background-color: ${colorWhite};
  color: ${colorBlack};
  border: 1px solid ${colorBlack};

  &:hover {
    color: ${colorWhite};
    background-color: ${colorBlack};
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: ${googleBlue};
  color: ${colorWhite};
  border: none;

  &:hover {
    background-color: ${googleBlueDark};
    border: none;
  }
`;

/**
 *
 * @param {Boolean} props expect inverted or isGoogleSignIn, if none specified, return default button
 * @returns correspond styles
 */

const getButtonSyles = (props) => {
  // separate condition for google button, i know for sure that google styles newer become inverted
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  //general return
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bolder;
  cursor: pointer;

  display: flex;
  justify-content: center;

  /*call defferent styles*/
  ${getButtonSyles}
`;
