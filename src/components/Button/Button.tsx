import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@/components/mantine';
import { GiHexagonalNut } from 'react-icons/gi';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

type ButtonProps = {
  href?: string;
} & MantineButtonProps;

export const Button = ({ href, children, ...props }: ButtonProps) => (
  <>
    {href ? (
      <Link href={href}>
        <MantineButton {...props}>{children}</MantineButton>
      </Link>
    ) : (
      <MantineButton {...props}>{children}</MantineButton>
    )}
  </>
);

export const ButtonPrimary = (props: ButtonProps) => (
  <Button variant="primary" {...props} />
);

export const ButtonSecondary = (props: ButtonProps) => (
  <Button variant="secondary" {...props} />
);

export const ButtonArrow = (props: ButtonProps) => (
  <Button variant="arrow" {...props} rightIcon={<BsArrowRight />} />
);

export const ButtonLogo = () => (
  <Button href={'/'}>
    <GiHexagonalNut color="white" />
  </Button>
);
