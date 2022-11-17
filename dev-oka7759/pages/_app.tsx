import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SiderLayout from 'component/layout/SiderLayout';
import HeaderLayout from 'component/layout/HeaderLayout';
import React, { useState } from 'react';
const { Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <SiderLayout collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderLayout setCollapsed={setCollapsed} collapsed={collapsed} />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Component {...pageProps} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Copyright © December and Company Inc. </Footer>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
