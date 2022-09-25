import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'

import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Layout from '../components/Layout'

const TRACKING_ID = "UA-242733733-1";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
