'use client';
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@mantine/core';
import { GiHexagonalNut } from 'react-icons/gi';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
} & MantineButtonProps;

export const Button = ({ href, children, ...props }: ButtonProps) => (
  <MantineButton {...props}>
    {href ? (
      <Link className="test" href={href}>
        {children}
      </Link>
    ) : (
      children
    )}
  </MantineButton>
);

export const ButtonPrimary = (props: ButtonProps) => (
  <Button variant="primary" {...props} />
);

export const ButtonSecondary = (props: ButtonProps) => (
  <Button variant="secondary" {...props} />
);

export const ButtonLogo = () => (
  <Button href={'/'}>
    <GiHexagonalNut color="white" />
  </Button>
);
