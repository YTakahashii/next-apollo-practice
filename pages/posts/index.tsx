import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const PostsPage: NextPage = () => (
  <>
    <Head>
      <title>Posts</title>
    </Head>
    <h1>posts page</h1>
    <Link href="/">
      <a>back</a>
    </Link>
  </>
);

export default PostsPage;
