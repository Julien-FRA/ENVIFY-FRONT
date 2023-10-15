import classes from './AvatarLogo.module.css';
import { Avatar, AvatarProps } from '@mantine/core';

export const AvatarLogo = (props: AvatarProps) => {
  return (
    <Avatar
      src={props.src ?? '../../../package.svg'}
      className={classes.avatar}
      size={48}
    />
  );
};
