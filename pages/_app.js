import Head from 'next/head';
import Footer from '../components/Footer';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Sample Pages for Data Fetching</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp;
