import { LinkProps } from "@/utils/types/component.type";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const LinkCustom = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

function TextButton({ href, children }: LinkProps) {
  return <LinkCustom href={href}>{children}</LinkCustom>;
}

export default TextButton;
