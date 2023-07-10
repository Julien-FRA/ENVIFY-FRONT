import React from "react";
import PrimaryPutton from "../Button/Primary.button";

const Header = () => {
  return (
    <nav>
      <PrimaryPutton href={"/"}>Home</PrimaryPutton>
      <PrimaryPutton href={"/login"}>Login</PrimaryPutton>
      <PrimaryPutton href={"/register"}>Register</PrimaryPutton>
    </nav>
  );
};

export default Header;
