import useSWR from 'swr';
import type { NextPage } from 'next';
import getPosts from './api/getPosts';
import { Post } from '@/types';

const Home: NextPage = () => {
  const { data: posts, error, isLoading } = useSWR('allPosts', getPosts);

  return (
    <div className="container mx-auto">
      <h1>Header</h1>
      <h1>Marketplace</h1>
      <h1>Hero</h1>
      <h1>Product Tiles</h1>
      {error && <h1>Error Here</h1>}
      {isLoading ? (
        <h1>Loading Here</h1>
      ) : (
        <div>
          {posts &&
            posts.map((post: Post, index: number) => (
              <div key={index}>
                <p>{post.title}</p>
                <p>------------------------------</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
