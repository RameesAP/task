import { gql } from "graphql-request";

// export const GET_PRODUCTS = gql`
//   query GetProducts($categoryUid: String!, $pageSize: Int!, $currentPage: Int!) {
//     products(
//       filter: { category_uid: { eq: $categoryUid } }
//       pageSize: $pageSize
//       currentPage: $currentPage
//     ) {
//       items {
//         name
//       }
//     }
//   }
// `;

// export const GET_PRODUCTS = gql`
//   query GetProducts(
//     $categoryUid: String!
//     $pageSize: Int!
//     $currentPage: Int!
//   ) {
//     products(
//       filter: { category_uid: { eq: $categoryUid } }
//       pageSize: $pageSize
//       currentPage: $currentPage
//     ) {
//       items {
//         name
//         media_gallery {
//           url
//           label
//         }
//         price_range {
//           minimum_price {
//             final_price {
//               currency
//               value
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_PRODUCT_BY_ID = `
  query GetProductById($id: String!) {
    product(id: $id) {
      id
      name
      description
      price_range {
        minimum_price {
          final_price {
            value
            currency
          }
        }
      }
      media_gallery {
        url
      }
    }
  }
`;

export const GetProductbyId = gql`
  query GetProductById($id: Int!) {
    products(filter: { id: { eq: $id } }, pageSize: 1, currentPage: 1) {
      items {
        name
        id
        uid
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
    }
  }
`;

export const GET_PRODUCTS = gql`
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

export const GET_PRODUCTSS = `
  query GetProducts($categoryUid: String!, $pageSize: Int!, $currentPage: Int!) {
    products(
      categoryUid: $categoryUid
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      items {
        id
        name
      }
    }
  }
`;
