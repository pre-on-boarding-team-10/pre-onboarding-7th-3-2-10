import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
	font: inherit;
	vertical-align: baseline;
 }

 html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
 }

  body {
	  line-height: 1;
  }

  ol, ul {
	list-style: none;
  }

  blockquote, q {
	  quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
	  content: '';
	  content: none;
  }

  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  input:focus {
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  #components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout.ant-layout-has-sider{

  min-height: 100vh;
}
`;

export default GlobalStyle;
