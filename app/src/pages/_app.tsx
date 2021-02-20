import "../../styles/globals.scss";
import { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import Head from "next/head";
import initAuth from "../firebase/initAuth";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { withAuthUser } from 'next-firebase-auth'

initAuth()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(withAuthUser()(MyApp));
