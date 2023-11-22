import { Product } from '@/types';
import { FC } from 'react';

export type CardProps = {
  product: Product
};

const Card: FC<CardProps> = ({ product }) => {
  return (
    <article className="relative mb-8">
      <div className="overflow-hidden">
        <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300 max-h-56 max-w-56" src={product.images[0]} alt={product.title} />
      </div>
      <div className="mt-4 flex items-start justify-between flex-col">
        <div className="mb-2">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="/test.com" title="" className="cursor-pointer">
              {product.title}
              <span className="absolute" aria-hidden="true"></span>
            </a>
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">£{product.price.toFixed(2)}</p>
        </div>
      </div>
    </article>
  )
};

export default Card;

