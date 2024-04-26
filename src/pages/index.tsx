'use client';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';


import { Button, Link } from '@carbon/react';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <div className="container">
          <Heading as="h2">Who are we?</Heading>
          <p>Welcome to Miners Online, a Minecraft server founded and operated by the President of Samland. It serves as the virtual home for the Samland Government, a sovereign entity existing within the Minecraft worlds provided by us.</p>
          <Button href='/docs/miners_online/intro'>
            More about us.
          </Button>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
