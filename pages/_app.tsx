import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../app/store";
import StoreInitializer from "../app/components/storeInitializer";
import { Provider } from "react-redux";
import ErrorBoundary from "../app/components/search/Error/ErrorBoundary";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StoreInitializer>
          <Component {...pageProps} />
        </StoreInitializer>
      </Provider>
    </ErrorBoundary>
  );
}
