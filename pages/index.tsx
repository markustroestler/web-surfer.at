import { type NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/sections/Hero';
import LandingPages from '../components/sections/LandingPages';
import CustomProjects from '../components/sections/CustomProjects';
import Portfolio from '../components/sections/Portfolio';
import JoinCrew from '../components/sections/JoinCrew';
import Contact from '../components/sections/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>web-surfer.at | High-Performance Landing Pages</title>
        <meta name="description" content="Join our crew for stunning, high-performance websites that make waves in your industry." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-deep-900 text-gray-100">
        <Header />
        <main>
          <Hero />
          <LandingPages />
          <CustomProjects />
          <Portfolio />
          <JoinCrew />
        </main>
      </div>
    </>
  );
}

export default Home;