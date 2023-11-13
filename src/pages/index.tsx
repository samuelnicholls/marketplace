import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { createZodFetcher } from "zod-fetch";
import { Post } from '@/types';
import { PostSchema } from '@/schemas';
import usePosts from './api/getPosts';

const Home: NextPage = () => {
  const { data, error, isLoading } = usePosts();

  const [posts, setPosts] = useState<Post[]>([])

  console.log("data", data)
  console.log("error", error)
  console.log("isLoading", isLoading)

  return (
    <div className="container mx-auto">
      <h1>NextJS Starter</h1>
      {error && (
        <strong>Error Here</strong>
      )}
      {posts.map((post: Post, index: number) => (
        <div key={index}>
          <p>{post.title}</p>
          <p>------------------------------</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
