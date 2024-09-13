'use client'; // This ensures the file runs in the client environment

import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/graphql/queries';

const ProductListing = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      categoryUid: 'Mw==', // Example category UID
      pageSize: 12,
      currentPage: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.products?.items.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>
            Price: {product.price_range.minimum_price.final_price.value} {product.price_range.minimum_price.final_price.currency}
          </p>
          {product.media_gallery.length > 0 && (
            <img src={product.media_gallery[0].url} alt={product.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
