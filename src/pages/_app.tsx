import "../../styles/globals.scss";
import { AppProps } from "next/app";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
