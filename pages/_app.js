import "../styles/globals.css";
import { ContextProvider } from "../contexts/module";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
