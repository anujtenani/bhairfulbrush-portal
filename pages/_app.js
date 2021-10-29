import '../styles/bootstrap.scss';
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
              <meta property="og:site_name" content="Behairfulbrush.com"/>
              <meta property="og:url" content="https://behairfulbrush.com/"/>
              <meta property="og:title" content="Behairful Brush"/>
              <meta property="og:type" content="website"/>
              <meta property="og:description" content="Perfect for dry detangling, speeding up your wash day, Great for product distribution, making sure every strand is saturated with conditioner, Amazing for creating curl clumps, definition and volume. Hair Full of Happiness!"/>
              <meta property="og:image" content="http://cdn.shopify.com/s/files/1/0229/7813/4080/files/Behairful4_Alt_1200x1200.png?v=1549437038"/>
              <meta property="og:image:secure_url" content="https://cdn.shopify.com/s/files/1/0229/7813/4080/files/Behairful4_Alt_1200x1200.png?v=1549437038"/>
              <meta name="twitter:title" content="Behairful Brush"/>
              <meta name="twitter:description" content="Perfect for dry detangling, speeding up your wash day, Great for product distribution, making sure every strand is saturated with conditioner, Amazing for creating curl clumps, definition and volume. Hair Full of Happiness!"/>
              <meta name="theme-color" content="#1f2021" />
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
