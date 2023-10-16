'use client';
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@mantine/core';
import Link from 'next/link';

type ButtonProps = MantineButtonProps & {
  href?: string;
  variant?: MantineButtonProps['variant'] | 'arrow';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  reload?: boolean;
};

export const Button = ({
  href,
  variant = 'filled',
  children,
  type,
  reload,
  ...props
}: ButtonProps) => {
  const reloadIfPathMatches = () => {
    if (window.location.pathname === href) return window.location.reload();
    if (reload) window.location.reload();
  };

  return href ? (
    <MantineButton
      component={Link}
      href={href}
      onClick={reloadIfPathMatches}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  ) : (
    <MantineButton variant={variant} type={type} {...props}>
      {children}
    </MantineButton>
  );
};

export const ButtonIcon = ({ children, ...props }: ButtonProps) => (
  <Button {...props} variant="subtle" h={48} p={12}>
    {children}
  </Button>
);
