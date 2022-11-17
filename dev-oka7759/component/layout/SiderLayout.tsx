import { BankOutlined, LineChartOutlined, DashboardOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import logo from '/public/images/logo.png';
import React from 'react';
import styled from 'styled-components';

const { Sider } = Layout;
interface LayoutProps {
  collapsed: boolean;
}

const SiderLayout = (props: LayoutProps) => {
  const { collapsed } = props;
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('대시보드', '1', <DashboardOutlined />),
    getItem('계좌 목록', 'sub1', <BankOutlined />, [getItem('투자계좌', '2', <LineChartOutlined />)]),
    getItem('사용자', '3', <UserOutlined />),
    getItem('로그아웃', '4', <LogoutOutlined />),
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo>
        <Image src={logo} layout="intrinsic" alt="logo" />
      </Logo>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        onClick={(e) => {
          console.log(e.key);
        }}
      />
    </Sider>
  );
};

export default SiderLayout;
const Logo = styled.div`
  width: 100%;
  padding: 10px;
`;
