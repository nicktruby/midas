import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Footer,
  Header,
  Hero,
  WhyMidas,
  AboutUs,
  Contact,
} from '../components';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Midas Leasing</title>
      </Head>

      <main>
        <Hero />
        <WhyMidas />
        <AboutUs />
        <Contact />
      </main>
    </>
  );
};

export default Index;
