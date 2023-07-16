import { LinkProps } from '@/utils/types/component.type';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';

const LinkCustom = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 14px;

  & svg {
    margin-left: 0.5rem;
    transition: 0.5s;
  }

  &:hover {
    & svg {
      margin-left: 0.75rem;
      transition: 0.5s;
    }
  }
`;

function ArrowButton({ href, children }: LinkProps) {
  return (
    <LinkCustom href={href}>
      {children}
      <BsArrowRight />
    </LinkCustom>
  );
}

export default ArrowButton;
