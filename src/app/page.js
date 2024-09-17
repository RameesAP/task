import { GET_PRODUCTS } from "@/graphql/queries";
import { GraphQLClient } from "graphql-request";

import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import ProductListing from "@/components/ProductListing/ProductListing";
// import { useEffect, useState } from "react";
import axios from "axios";

// async function fetchProducts() {
//   const client = new GraphQLClient("https://magento.demo.ceymox.net/graphql");
//   const data = await client.request(GET_PRODUCTS, {
//     categoryUid: "Mw==",
//     pageSize: 12,
//     currentPage: 1,
//   });
//   return data.products.items;
// }

// async function fetchProducts() {
//   const response = await fetch("/api/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: GET_PRODUCTS,
//       variables: {
//         categoryUid: "Mw==",
//         pageSize: 12,
//         currentPage: 1,
//       },
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data = await response.json();
//   return data.data.products.items;
// }

export default function Home() {
  // const products = await fetchProducts();

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const productData = await fetchProducts();
  //       setProducts(productData);
  //     } catch (err) {
  //       console.error("Error fetching products:", err);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getProducts();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

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

  // console.log(products, "dddddddddd");

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-white ">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Settings
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Orders
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Customers
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className=" flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial"></div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className=" flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <div className=" mx-auto grid w-full max-w-screen-2xl gap-2">
            <h1 className="text-3xl font-semibold">Bags</h1>
          </div>
          <div className=" mx-auto grid w-full max-w-screen-2xl items-start gap-6 md:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr]">
            <div
              className="grid gap-4 text-sm text-muted-foreground"
              x-chunk="dashboard-04-chunk-0"
            >
              <div className="">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>Price</CardTitle>
                    {/* <CardDescription>
                    Used to identify your store in the marketplace.
                  </CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <div className="relative mb-6">
                      <label htmlFor="labels-range-input" className="sr-only">
                        Labels range
                      </label>
                      <input
                        id="labels-range-input"
                        type="range"
                        value="1000"
                        min="100"
                        max="1500"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                        Min ($100)
                      </span>

                      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                        $1000
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                        Max ($1500)
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                  </CardFooter>
                </Card>
              
              </div>
              <div className=" ">
                <h1 className="text-2xl font-bold text-black">Color</h1>
              </div>

              <div className="">
                <Card x-chunk="dashboard-04-chunk-1" className="">
                  <CardHeader></CardHeader>
                  <CardContent>
                    <form>
                      <Input placeholder="Search here" />
                    </form>
                    <div className="flex items-center space-x-2 mt-5">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Black (4)
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button className="lg:w-[150px] md:w-[100px] bg-[#1D4ED8] hover:bg-[#2960f5]">
                      Read more
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className=" ">
                <h1 className="text-2xl font-semibold text-black">Category</h1>
              </div>
              <div className="">
                <Card x-chunk="dashboard-04-chunk-1" className="">
                  <CardHeader>
                    {/* <CardTitle>Store Name</CardTitle> */}
                    {/* <CardDescription>
                      Used to identify your store in the marketplace.
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <form>
                      <Input placeholder="Search here" />
                    </form>
                    <div className="flex items-center space-x-2 mt-5">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Gear (14)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mt-5">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Bags (14)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mt-5">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Collections (9)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mt-5">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Men (4)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mt-5">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Sale (4)
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button className="lg:w-[150px] md:w-[100px] bg-[#1D4ED8] hover:bg-[#2960f5]">
                      Read more
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <ProductListing
            // products={products}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
