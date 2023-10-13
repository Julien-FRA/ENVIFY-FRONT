import { render, screen } from '../../testing-utils';
import { RegisterForm } from '@/components/Form/Register.form';

describe('<RegisterForm />', () => {
  it('Render component', () => {
    render(<RegisterForm />);
  });

  it('Snapshot test', () => {
    const { container } = render(<RegisterForm />);

    expect(container).toMatchSnapshot();
  });

  it('Get basics fields', () => {
    const { container } = render(<RegisterForm />);

    const inputUserName = container.querySelector(`input[name="username"]`);
    const inputFirstName = container.querySelector(`input[name="firstname"]`);
    const inputLastName = container.querySelector(`input[name="lastname"]`);
    const inputEmail = container.querySelector(`input[name="email"]`);
    const inputPassword = container.querySelector(`input[name="password"]`);
    const inputConfirmPassword = container.querySelector(
      `input[name="confirmpassword"]`
    );

    expect(inputUserName).toBeInTheDocument();
    expect(inputFirstName).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputConfirmPassword).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Get text, placeholder', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterForm />);

    expect(getByText('Get Started')).toBeTruthy();
    expect(getByText('Create a new account')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();

    expect(getByPlaceholderText('Your username')).toBeTruthy();
    expect(getByPlaceholderText('Your first name')).toBeTruthy();
    expect(getByPlaceholderText('Your last name')).toBeTruthy();
    expect(getByPlaceholderText('Your email')).toBeTruthy();
    expect(getByPlaceholderText('Your password')).toBeTruthy();
    expect(getByPlaceholderText('Confirm your password')).toBeTruthy();
  });
});
