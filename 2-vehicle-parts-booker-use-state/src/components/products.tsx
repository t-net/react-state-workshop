import React from 'react';
import Flexbox from "@/components/styled/flexbox";
import ProductCard from "@/components/product-card";
import Product from "@/types/product";

const Products = ({ addToCart }: { addToCart: (product: Product, quantity: number) => void }) => {
  // in a real product this will come from getServerSideProps or fetch('/api/products')
  const products: Product[] = [
    {
      id: 1,
      name: 'Jet Fuel Engine Turbo',
      description: 'The best thing you can get for your vehicle',
    },
    {
      id: 2,
      name: 'Double Rainbow Window Wiper',
      description: 'Keep your windows shining bright',
    },
    {
      id: 3,
      name: 'Grungy Exhaust Pipe',
      description: 'Pimp it up with the latest exhaust on the block',
    },
  ];

  return (
    <Flexbox $gap={6} $wrap="wrap" $alignItems="stretch">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </Flexbox>
  );
};

export default Products;
