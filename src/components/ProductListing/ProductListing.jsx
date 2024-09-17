import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { MdBalance } from "react-icons/md";
import Link from "next/link";
import { GET_PRODUCTS } from "@/graphql/queries";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductListing({ products }) {


  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.post("https://magento.demo.ceymox.net/graphql", {
  //         query: GET_PRODUCTS,
  //         variables: {
  //           categoryUid: "Mw==", // Replace with your actual category UID
  //           pageSize: 12,
  //           currentPage: 1,
  //         },
  //       });

  //       setProducts(response.data.data.products.items);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);


  console.log("dataaaaProducts  ===",products);
  // console.log("dataaaaProductsname  ===",products[0]?.name);
  // console.log("dataaaaProductsid  ===",products[0]?.id);
  
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <Card key={product.id} x-chunk="dashboard-04-chunk-1" className="">
            <CardHeader className="p-6 pb-0">
              <CardTitle>
                <div>
                  <Image
                    //   className="w-full h-full"
                    src={
                      product.media_gallery.length > 0
                        ? product.media_gallery[0].url
                        : "/default-image.jpg"
                    } // Fallback to default if no image
                    width={260}
                    height={200}
                    alt={product.name}
                  />
                </div>
              </CardTitle>
              <CardDescription className="py-2">{product.name}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <h3>
                {product.price_range.minimum_price.final_price.currency}{" "}
                {product.price_range.minimum_price.final_price.value}
              </h3>
            </CardContent>
            <CardFooter className="border-t px-6 py-4 justify-between">
              <Button className="lg:w-[150px] md:w-[100px] bg-[#1D4ED8] hover:bg-[#2960f5]">
                <FiShoppingCart className="mr-2" />
                Add to cart
              </Button>

              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <MdFavorite className="text-slate-600" size={22} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <MdBalance className="text-slate-600" size={22} />
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
