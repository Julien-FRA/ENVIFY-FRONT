import { render, screen, fireEvent } from '../../testing-utils';
import { Button } from '@/components/Button';

describe('<Button />', () => {
  it('Render component', () => {
    render(<Button />);
  });

  it('Snapshot test', () => {
    const { container } = render(<Button>Click</Button>);

    expect(container).toMatchSnapshot();
  });

  it('Get basics fields', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Disabled button', () => {
    render(<Button disabled>Click</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Link button', () => {
    const { container } = render(<Button href="/">Click</Button>);
    const button = container.querySelector('a');

    expect(button).toHaveAttribute('href', '/');
  });

  it('Click button', () => {
    const { container } = render(<Button />);

    expect(fireEvent.click(container)).toBeTruthy();
  });

  it('Primary button', () => {
    const { container } = render(<Button variant="filled" />);
    const button = container.querySelector('button[data-variant="filled"]');

    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();
  });

  it('Secondary button', () => {
    const { container } = render(<Button variant="outline" />);
    const button = container.querySelector('button[data-variant="outline"]');

    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();
  });
});
