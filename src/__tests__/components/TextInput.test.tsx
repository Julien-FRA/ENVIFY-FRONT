import { render } from '../../testing-utils';
import { TextInput } from '@mantine/core';

describe('<PasswordInput />', () => {
  it('Render component', () => {
    render(
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={true}
      />
    );
  });

  it('Snapshot test', () => {
    const { container } = render(
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={true}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('Get basics fields', () => {
    const { container } = render(
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={true}
      />
    );

    const label = container.querySelector(`label`);
    const inputText = container.querySelector(`input`);

    expect(label).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
  });

  it('Get label text, placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={true}
      />
    );

    expect(getByText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Your email')).toBeTruthy();
  });
});
