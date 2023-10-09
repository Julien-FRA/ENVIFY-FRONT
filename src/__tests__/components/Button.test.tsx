import { render, screen, fireEvent } from '../../testing-utils';
import { Button } from '@/components/Button';

describe('<Button />', () => {
  it('Render component', () => {
    render(<Button />);
  });

  it('Get basics fields', () => {
    const { container } = render(<Button>Click</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Disabled button', () => {
    const { container } = render(<Button disabled>Click</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    expect(container).toMatchSnapshot();
  });

  it('Link button', () => {
    const { container } = render(<Button href="/">Click</Button>);
    const button = container.querySelector('a');

    expect(button).toHaveAttribute('href', '/');

    expect(container).toMatchSnapshot();
  });

  it('Click button', () => {
    const { container } = render(<Button />);

    expect(fireEvent.click(container)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('Primary button', () => {
    const { container } = render(<Button variant="filled" />);
    const button = container.querySelector('button[data-variant="filled"]');

    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('Secondary button', () => {
    const { container } = render(<Button variant="outline" />);
    const button = container.querySelector('button[data-variant="outline"]');

    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
