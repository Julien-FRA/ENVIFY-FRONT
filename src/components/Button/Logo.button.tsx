import { LinkProps } from "@/utils/types/component.type";
import { GiHexagonalNut } from "react-icons/gi";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const LinkCustom = styled(Link)`
  width: 35px;
  height: 35px;
  display: inline-block;
  color: white;
  margin-left: 1rem;
  margin-left: 1rem;


  & svg {
    width: 35px;
    height: 35px;
  }
`;

function LogoButton({ href }: LinkProps) {
  return <LinkCustom href={href}>{<GiHexagonalNut />}</LinkCustom>;
}

export default LogoButton;
