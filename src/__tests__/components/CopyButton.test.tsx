import { render, fireEvent, screen } from '../../testing-utils';
import { ButtonCopy } from '@/components/Button/Copy.Button';

describe('<ButtonCopy />', () => {
  it('Render component', () => {
    render(<ButtonCopy value="" />);
  });

  it('Get basics fields', () => {
    const { container } = render(<ButtonCopy value="value" />);

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Click button', () => {
    const { container } = render(<ButtonCopy value="value" />);

    expect(fireEvent.click(container)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
