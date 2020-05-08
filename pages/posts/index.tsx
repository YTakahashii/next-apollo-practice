import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  {
    posts {
      id
      title
      description
    }
  }
`;

const PostsPage: NextPage = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <p>{`Error: ${error.message}`}</p>;
  }

  console.log(JSON.stringify(data, null, 2));

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>posts page</h1>

      <ul>
        {data.posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
      <Link href="/">
        <a>back</a>
      </Link>
    </>
  );
};

export default PostsPage;
