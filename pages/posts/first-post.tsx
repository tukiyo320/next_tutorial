import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../../src/components/Layout';
import { Link } from '../../src/components/Link';

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <img src="/images/profile.jpeg" alt="Your Name" />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
