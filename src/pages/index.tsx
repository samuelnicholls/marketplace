import useSWR from 'swr';
import type { NextPage } from 'next';
import getProducts from './api/getProducts';
import { Product } from '@/types';
import Card from '@/components/Card';

const Home: NextPage = () => {
  const { data: products, error, isLoading } = useSWR('allProducts', getProducts);

  return (
    <div className="container mx-auto">
      <h1>Header</h1>
      <h1>Marketplace</h1>
      <h1>Hero</h1>
      {error && <h1>Error Here</h1>}
      {isLoading ? (
        <h1>Loading Here</h1>
      ) : (
        <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Brower all our products</h2>
              <p className="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4'>
              {products &&
                products.map((product: Product, index: number) => (
                  <Card key={index} product={product} />
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
