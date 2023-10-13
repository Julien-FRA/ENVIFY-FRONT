import { render } from '../../testing-utils';
import { BlockScript } from '@/components/BlockScript';

describe('<BlockScript />', () => {
  it('Render component', () => {
    render(<BlockScript comment="" code="" />);
  });

  it('Snapshot test', () => {
    const { container } = render(<BlockScript comment="comment" code="code" />);

    expect(container).toMatchSnapshot();
  });

  it('Get all props', () => {
    const { getByText } = render(<BlockScript comment="comment" code="code" />);

    expect(getByText('comment')).toBeTruthy();
    expect(getByText('code')).toBeTruthy();
  });

  it('Get basics fields', () => {
    const { container } = render(<BlockScript comment="comment" code="code" />);

    const paragraph = container.querySelector(`p`);
    const code = container.querySelector(`code`);

    expect(paragraph).toBeInTheDocument();
    expect(code).toBeInTheDocument();
  });
});
