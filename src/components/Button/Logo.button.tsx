import { LinkProps } from '@/utils/types/component.type';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';

const LinkCustom = styled(Link)`
  width: 35px;
  height: 35px;
  display: inline-block;
  color: white;

  & svg {
    width: 35px;
    height: 35px;
  }
`;

function LogoButton({ href, children }: LinkProps) {
  return <LinkCustom href={href}>{children}</LinkCustom>;
}

export default LogoButton;
