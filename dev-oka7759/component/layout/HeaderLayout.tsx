import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;
interface LayoutProps {
  collapsed: boolean;
  setCollapsed: () => void;
}

const HeaderLayout = (props: LayoutProps) => {
  const { collapsed, setCollapsed } = props;
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  );
};

export default HeaderLayout;
