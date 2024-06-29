import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="WRITTEN BY NICK"
      links={[
        {
          key: 'BI PROJECT',
          title: 'BI PROJECT',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/NickyS1mpe',
          blankTarget: true,
        },
        {
          key: 'BI PROJECT',
          title: 'BI PROJECT',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
