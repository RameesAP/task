import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($categoryUid: String!, $pageSize: Int!, $currentPage: Int!) {
    products(filter: { category_uid: { eq: $categoryUid } }, pageSize: $pageSize, currentPage: $currentPage) {
      items {
        name
        id
        price_range {
          minimum_price {
            final_price {
              currency
              value
            }
          }
        }
        media_gallery {
          url
        }
      }
    }
  }
`;
