import { PostSchema } from '@/schemas';
import { z } from 'zod';

const getPosts = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1',
  );
  const posts = await response.json();
  return z.array(PostSchema).parse(posts);
};

export default getPosts;
