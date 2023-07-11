import { LinkProps } from "@/utils/types/component.type";
import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const LinkCustom = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
`;

function PrimaryPutton({ href, children }: LinkProps) {
  return (
    <Button color="violet" mx="1rem">
      <LinkCustom href={href}>{children}</LinkCustom>
    </Button>
  );
}

export default PrimaryPutton;
