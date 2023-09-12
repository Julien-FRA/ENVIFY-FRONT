import { RegisterForm } from '../../components/Form/Register.form';
import { AuthContainer } from '@/components/Container/Auth';

export default function Register() {
  return (
    <AuthContainer>
      <RegisterForm />
    </AuthContainer>
  );
}
