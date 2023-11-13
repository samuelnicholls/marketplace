import useSWR from "swr";
import { PostSchema } from "@/schemas";
import { z } from "zod";

const usePosts = () => {
  return useSWR<any>(
    "posts", async () => {
      const response = await (await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')).json();
      return z.array(PostSchema).safeParse(response);
    }
  );
};

export default usePosts


// const { data, error, isLoading } = useSWR("http://localhost:3001", fetcher);