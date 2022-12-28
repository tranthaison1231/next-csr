import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StyleProvider } from '@ant-design/cssinjs';
import { TOKEN } from 'configs/theme';
import '../configs';
import { ConfigProvider } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      componentSize="large"
      theme={{
        token: TOKEN,
      }}
    >
      <StyleProvider hashPriority="high">
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  );
}

export default MyApp;
