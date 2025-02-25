

import Layout from '@/components/layout';
import React from 'react';
import { AppProps } from 'next/app'; // Импортируйте AppProps
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;