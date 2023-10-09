import { render } from '../../testing-utils';
import { PasswordInput } from '@mantine/core';

describe('<PasswordInput />', () => {
  it('Render component', () => {
    render(
      <PasswordInput
        placeholder="Your password"
        label="Password"
        required={true}
        name="password"
      />
    );
  });

  it('Get basics fields', () => {
    const { container } = render(
      <PasswordInput
        placeholder="Your password"
        label="Password"
        required={true}
        name="password"
      />
    );

    const label = container.querySelector(`label`);
    const inputPassword = container.querySelector(`input[type="password"]`);

    expect(label).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it('Get label text, placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <PasswordInput
        placeholder="Your password"
        label="Password"
        required={true}
        name="password"
      />
    );

    expect(getByText('Password')).toBeTruthy();
    expect(getByPlaceholderText('Your password')).toBeTruthy();
  });
});
