import { LoginForm } from '@/components/Form/Login.form';
import { AuthContainer } from '@/components/Container/Auth';

export default function Login() {
  return (
    <AuthContainer>
      <LoginForm />
    </AuthContainer>
  );
}
