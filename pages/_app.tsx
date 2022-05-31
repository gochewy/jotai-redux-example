import type { AppProps } from "next/app";
import "@picocss/pico/css/pico.min.css"
import { Provider } from "react-redux";
import store from "../src/lib/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
