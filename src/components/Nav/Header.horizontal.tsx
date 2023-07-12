import React from "react";
import PrimaryPutton from "../Button/Primary.button";
import OutlineButton from "../Button/Outline.button";
import LogoButton from "../Button/Logo.button";
import styled from "@emotion/styled";

const NavHorizontal = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-bottom: 1px solid #353535;
  padding: 1.5rem;
`;

const HeaderHorizontal = () => {
  return (
    <NavHorizontal>
      <LogoButton href={"/"} children={undefined} />
      <div>
        <OutlineButton href={"/login"}>Login</OutlineButton>
        <PrimaryPutton href={"/register"}>Register</PrimaryPutton>
      </div>
    </NavHorizontal>
  );
};

export default HeaderHorizontal;
