"use client";

import { Button } from "@/components/ui/button";
import { useSingleProduct } from "@/hooks/queryHooks";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdBalance, MdFavorite } from "react-icons/md";
import { GraphQLClient } from "graphql-request";
import { GET_PRODUCTS } from "@/graphql/queries";
import axios from "axios";
import { graphQLClient } from "@/lib/graphqlClient";

// const client = new GraphQLClient("https://magento.demo.ceymox.net/graphql");

const SingleProduct = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGraphQLData = async () => {
      const graphqlQuery = {
        query: `
          query GetProducts($categoryUid: String!, $pageSize: Int!, $currentPage: Int!) {
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
        `,
        variables: {
          categoryUid: "Mw==", // Your category UID
          pageSize: 12, // Number of items per page
          currentPage: 1, // The page number
        },
      };
      try {
        const res = await axios.post(
          "https://magento.demo.ceymox.net/graphql",
          graphqlQuery,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data.data.products.items);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGraphQLData();
  }, []);

  console.log(data, "this is my dataaaaaaa");

  console.log("slugggDAtaa  :===", params.productId);

  // const {data,isLoading,isError} = useQuery({
  //   queryKey:["singlepro"],
  //   queryFn:async()=>{
  //     const res = await axios("https://magento.demo.ceymox.net/graphql",{
  //       categoryUid: "Mw==",
  //       pageSize: 12,
  //       currentPage: 1,
  //     })
  //     // return res.data
  //   }
  // })
  // console.log(data,"ddddddddddddddd");

  return (
    <div className="">
      <div className=" md:flex min-h-screen w-full items-center justify-center gap-5">
        <div className=" w-full h-[500px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] bg-slate-200 rounded-lg flex items-center justify-center">
          image
        </div>
        <div className=" w-full h-full md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]">
          <div className=" text-3xl">Push It Messenger Bag</div>
          <div className=" ">star</div>
          <div className=" ">
            The name says so, but the Push It Messenger Bag is much more than a
            busy commuter's tote. It's a closet away from home when you're
            pedaling from class or work to gym and back or home again. It's the
            perfect size and shape for laptop, folded clothes, even extra shoes.
          </div>
          <div className="  flex justify-end md:justify-start">inStock</div>
          <div className="  flex justify-around p-3">
            <div className="">material</div>
            <div className="">Nyloon, Polyester</div>
          </div>
          <div className="  flex justify-around p-3">
            <div className="">Material</div>
            <div className="">Nyloon, Polyester</div>
          </div>
          <div className="  flex justify-between">
            <div className="text-2xl">$45.00</div>

            <div className="">
              <Button className="lg:w-[150px] md:w-[100px] bg-[#1D4ED8] hover:bg-[#2960f5]">
                <FiShoppingCart className="mr-2" />
                Add to cart
              </Button>
            </div>
          </div>
          <div className="  flex justify-end gap-10 mt-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <MdFavorite className="text-slate-600" size={22} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <MdBalance className="text-slate-600" size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
