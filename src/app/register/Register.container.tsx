'use client';
import styles from './register.module.css';
import { BulletBlock } from '@/components/Block/Bullet.block';
import { RegisterForm } from '../../components/Form/Register.form';
import { Button } from '@/components/Button/Button';
import { BsArrowLeft } from 'react-icons/bs';

export const RegisterContainer = () => {
  return (
    <>
      <div className={styles.backPage}>
        <Button href={'/'}>
          <BsArrowLeft />
        </Button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
        <div className={styles.blockContainer}>
          <BulletBlock />
        </div>
      </div>
    </>
  );
};
