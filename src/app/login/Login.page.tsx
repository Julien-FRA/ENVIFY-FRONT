'use client';
import { BulletBlock } from '@/components/Block/Bullet.block';
import { LoginForm } from '../../components/Form/Login.form';
import { createStyles } from '@mantine/core';
import { ButtonPrimary } from '@/components/Button/Button';
import { BsArrowLeft } from 'react-icons/bs';

export default function LoginPage() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.backPage}>
        <ButtonPrimary href={'/'}>
          <BsArrowLeft />
        </ButtonPrimary>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.formContainer}>
          <LoginForm />
        </div>
        <div className={classes.blockContainer}>
          <BulletBlock />
        </div>
      </div>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  backPage: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 100,
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    height: '100%',
    backgroundColor: theme.colors.dark[1],
    borderRight: `1px solid ${theme.colors.dark[3]}`,
  },
  blockContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    height: '100%',
  },
}));
