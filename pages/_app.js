import '../styles/bootstrap.scss';
import '../styles/landing-page.css';
import '../styles/globals.css'
import {IntlProvider} from "react-intl";
import Head from 'next/head'
import { SkeletonTheme } from "react-loading-skeleton";
function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link
                  href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Raleway:wght@400;700&display=swap"
                  rel="stylesheet"/>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
          </Head>
          <IntlProvider locale={"en"}>
              <SkeletonTheme color={"#202020"} highlightColor={"#444"}>
                    <Component {...pageProps} />
              </SkeletonTheme>
          </IntlProvider>
      </>
  );
}

export default MyApp
