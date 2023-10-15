import { render } from '../../testing-utils';
import { BlockScript } from '@/components/BlockScript';

describe('<BlockScript />', () => {
  it('Render component', () => {
    render(
      <BlockScript
        configFiles={[]}
        scripts={[
          {
            scriptLabel: 'Update of repositories',
            script: 'sudo apt update -y',
          },
        ]}
      />
    );
  });

  it('Snapshot test', () => {
    const { container } = render(
      <BlockScript
        configFiles={[]}
        scripts={[
          {
            scriptLabel: 'Update of repositories',
            script: 'sudo apt update -y',
          },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('Get all props', () => {
    const { getByText } = render(
      <BlockScript
        configFiles={[]}
        scripts={[
          {
            scriptLabel: 'Update of repositories',
            script: 'sudo apt update -y',
          },
        ]}
      />
    );

    expect(getByText('comment')).toBeTruthy();
    expect(getByText('code')).toBeTruthy();
  });

  it('Get basics fields', () => {
    const { container } = render(
      <BlockScript
        configFiles={[]}
        scripts={[
          {
            scriptLabel: 'Update of repositories',
            script: 'sudo apt update -y',
          },
        ]}
      />
    );

    const paragraph = container.querySelector(`p`);
    const code = container.querySelector(`code`);

    expect(paragraph).toBeInTheDocument();
    expect(code).toBeInTheDocument();
  });
});
