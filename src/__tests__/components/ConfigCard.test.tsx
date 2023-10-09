import { ConfigCard } from '@/components/Card/ConfigCard';
import { render } from '../../testing-utils';

describe('<Button />', () => {
  it('Render component', () => {
    render(
      <ConfigCard
        config={{
          id: 0,
          name: '',
          created_at: '',
          packages: [],
          scripts: undefined,
        }}
      />
    );
  });

  it('Get redirection to config', () => {
    const { container } = render(
      <ConfigCard
        config={{
          id: 4,
          name: '',
          created_at: '',
          packages: [],
          scripts: undefined,
        }}
      />
    );

    const button = container.querySelector('a');

    expect(button).toHaveAttribute('href', `/dashboard/config/4`);

    expect(container).toMatchSnapshot();
  });

  it('Get all packages in config', () => {
    const { container, getByText } = render(
      <ConfigCard
        config={{
          id: 4,
          name: '',
          created_at: '',
          packages: [
            {
              name: 'Node',
              alias: 'node',
              version: ['18.0.0', '2.0.0'],
              logo: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
            },
            {
              name: 'PostgreSQL',
              alias: 'postgresql',
              version: ['14.0', '13.4'],
              logo: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png',
            },
          ],
          scripts: undefined,
        }}
      />
    );

    expect(getByText(`Node - 18.0.0,2.0.0`)).toBeTruthy();
    expect(getByText('PostgreSQL - 14.0,13.4')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
