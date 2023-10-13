import { render, fireEvent, screen } from '../../testing-utils';
import { ButtonCopy } from '@/components/Button/Copy.Button';

describe('<ButtonCopy />', () => {
  it('Render component', () => {
    render(<ButtonCopy value="" />);
  });

  it('Snapshot test', () => {
    const { container } = render(<ButtonCopy value="value" />);

    expect(container).toMatchSnapshot();
  });

  it('Get basics fields', () => {
    render(<ButtonCopy value="value" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Click button', () => {
    const { container } = render(<ButtonCopy value="value" />);

    expect(fireEvent.click(container)).toBeTruthy();
  });
});
