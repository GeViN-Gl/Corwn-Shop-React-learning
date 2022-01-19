import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
`;

export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
  gap: 1.5rem;
`;

export const OptionLink = styled(Link)`
  font-size: 1.8rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  /*&:link,
&:visited,
&:hover,
&:active {
  text-decoration: none;
  color: #000;
}*/
`;
