import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import {
  getAllPostIds,
  getPostData,
  PostDataWithContent,
} from '../../lib/posts';
import { Date } from '../../src/components/Date';
import { Layout } from '../../src/components/Layout';
import utilStyles from '../../styles/utils.module.scss';

type Props = {
  postData: PostDataWithContent;
};

type Params = {
  id: string;
};

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (params == null) {
    return {
      notFound: true,
    };
  }

  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
