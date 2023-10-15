import type { StoryObj, Meta } from '@storybook/react';
import { BlockScript } from '.';
import React from 'react';

const meta: Meta<typeof BlockScript> = {
  title: 'components/Blocks/BlockScript',
  component: BlockScript,
  tags: ['autodocs'],
  args: {
    scripts: [
      {
        scriptLabel: 'Update of repositories',
        script: 'sudo apt update -y',
      },
      {
        scriptLabel: 'Add mariadb repository to download it',
        script:
          'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash',
      },
      {
        scriptLabel: 'Installation of mariadb',
        script: 'sudo apt-get install mariadb-server mariadb-client -y',
      },
      {
        scriptLabel: 'Checking the status of mariadb',
        script: 'sudo systemctl status mariadb',
      },
      {
        scriptLabel: 'Securing mysql',
        script: 'sudo mysql_secure_installation',
      },
    ],
    configFiles: [
      {
        fileName: '50-server.cnf.txt',
        file: '[mysqld]\n# The TCP port number to listen for incoming connections.\nport=3306\n\n# The path to the database directory.\n#datadir=/var/lib/mysql\ndatadir=/var/lib/mysql\n\n# The maximum number of concurrent connections.\n#max_connections=100\nmax_connections=100\n\n# The default storage engine for new tables.\n#default_storage_engine=InnoDB\ndefault_storage_engine=InnoDB\n\n# The default character set for new tables.\ndefault_character_set=utf8mb4\n\n# The default collation for new tables.\ndefault_collation_name=utf8mb4_general_ci\n\n# Enable the slow query log.\nslow_query_log=1\n\n# The maximum size of the slow query log file.\nslow_query_log_file=/var/log/mysql/slow.log\nslow_query_log_file_size=10240000\n\n# Enable the general query log.\ngeneral_log=0\n\n# The maximum size of the general query log file.\ngeneral_log_file=/var/log/mysql/general.log\ngeneral_log_file_size=10240000\n\n# The maximum size of the binary log file.\nmax_binlog_size=100M\n\n# The number of binary log files to keep.\nexpire_logs_days=10\n\n# The bind address for MySQL.\n#bind-address=0.0.0.0\nbind-address=0.0.0.0\n',
      },
    ],
  },
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    scripts: {
      control: { type: 'string' },
      description: `Script generate. Type : string`,
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof BlockScript>;

export const Default: Story = {
  render: (args) => <BlockScript {...args} />,
};

export const WithoutComment: Story = {
  render: (args) => <BlockScript {...args} />,
};

export const LongCode: Story = {
  render: (args) => <BlockScript {...args} />,
};

export const LongComment: Story = {
  render: (args) => <BlockScript {...args} />,
};
