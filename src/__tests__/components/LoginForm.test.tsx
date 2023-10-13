import { render, screen } from '../../testing-utils';
import { LoginForm } from '@/components/Form/Login.form';

describe('<LoginForm />', () => {
  it('Render component', () => {
    render(<LoginForm />);
  });

  it('Snapshot test', () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });

  it('Get basics fields', () => {
    const { container } = render(<LoginForm />);

    const inputText = container.querySelector(`input[name="email"]`);
    const inputPassword = container.querySelector(`input[name="password"]`);

    expect(inputText).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Get text, placeholder', () => {
    const { getByText, getByPlaceholderText } = render(<LoginForm />);

    expect(getByText('Welcome back')).toBeTruthy();
    expect(getByText('Sign in to your account')).toBeTruthy();
    expect(getByText('Sign in')).toBeTruthy();

    expect(getByPlaceholderText('Your email')).toBeTruthy();
    expect(getByPlaceholderText('Your password')).toBeTruthy();
  });
});
