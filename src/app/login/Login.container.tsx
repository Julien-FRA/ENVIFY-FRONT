'use client';
import styles from './login.module.css';
import { BulletBlock } from '@/components/Block/Bullet.block';
import { LoginForm } from '../../components/Form/Login.form';
import { Button } from '@/components/Button/Button';
import { BsArrowLeft } from 'react-icons/bs';

export const LoginContainer = () => {
  return (
    <>
      <div className={styles.backPage}>
        <Button href={'/'}>
          <BsArrowLeft />
        </Button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <LoginForm />
        </div>
        <div className={styles.blockContainer}>
          <BulletBlock />
        </div>
      </div>
    </>
  );
};
