"use client"
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";

// Initialize the GraphQL client
const client = new GraphQLClient("https://magento.demo.ceymox.net/graphql");

export const useSingleProduct = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['getsinglepro'],
    queryFn: async () => {
      const res = await axios.get('https://magento.demo.ceymox.net/graphql');
      return res.data;
    }
  });

  return { data, error, isError, isLoading };
};

export const useProductList = (categoryUid, pageSize = 12, currentPage = 1) => {
  return useQuery({
    queryKey: ["products", categoryUid, pageSize, currentPage],
    queryFn: async () => {
      try {
        const response = await client.request(GET_PRODUCTS_QUERY, {
          categoryUid,
          pageSize,
          currentPage,
        });

        console.log("GraphQL response:", response); // Log the entire response

        // Ensure the data structure matches what you expect
        if (response && response.products) {
          return response.products;
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
      }
    },
    enabled: !!categoryUid,
  });
};


// Define the query
const GET_PRODUCTS_QUERY = gql`
  query GetProducts(
    $categoryUid: String!
    $pageSize: Int!
    $currentPage: Int!
  ) {
    products(
      filter: { category_uid: { eq: $categoryUid } }
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      items {
        name
        only_x_left_in_stock
        id
        url_key
        url_rewrites {
          url
        }
        canonical_url
        categories {
          uid
          name
          breadcrumbs {
            category_name
            category_url_key
          }
        }
        uid
        media_gallery {
          url
          position
          disabled
          label
        }
        price_range {
          maximum_price {
            discount {
              amount_off
              percent_off
            }
            final_price {
              currency
              value
            }
            fixed_product_taxes {
              amount {
                __typename
              }
              label
            }
            regular_price {
              currency
              value
            }
          }
          minimum_price {
            discount {
              amount_off
              percent_off
            }
            final_price {
              currency
              value
            }
            fixed_product_taxes {
              amount {
                __typename
              }
              label
            }
            regular_price {
              currency
              value
            }
          }
        }
      }
      aggregations(filter: { category: { includeDirectChildrenOnly: true } }) {
        attribute_code
        count
        label
        options {
          label
          value
          count
        }
      }
    }
  }
`;

