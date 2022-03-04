import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Footer, Header } from '../components';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Midas Leasing</title>
        <meta
          name="description"
          content="Midas Leasing provide loans, finance contracts and leasing for Companies across the UK - Based in Tamworth, Staffordshire"
        />
        <meta
          name="keywords"
          content="Tamworth, Staffordshire, Birmingham, Leasing, Business, Loans, Finance, Finance Contracts, Business Loans, Business Leasing, UK"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:site_name" content="Midas Leasing" />
        <meta
          property="og:image"
          content="http://www.midasleasing.co.uk/assets/images/512x512"
        />
        <meta property="og:url" content="http://www.midasleasing.co.uk/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Midas Leasing</h1>
      </main>
    </>
  );
};

export default Index;
