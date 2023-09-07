import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@/components/mantine/index';
import { GiHexagonalNut } from 'react-icons/gi';
import Link from 'next/link';

interface ButtonProps extends MantineButtonProps {
  href?: string;
  outlined?: boolean;
}

export const Button = ({
  href,
  variant = 'filled',
  outlined,
  children,
  ...props
}: ButtonProps) => {
  const BaseButton = (
    <MantineButton variant={outlined ? 'outline' : variant} {...props}>
      {children}
    </MantineButton>
  );
  return <>{href ? <Link href={href}>{BaseButton}</Link> : BaseButton}</>;
};

export const ButtonLogo = () => (
  <Button href="/">
    <GiHexagonalNut color="white" />
  </Button>
);
