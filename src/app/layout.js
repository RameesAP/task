"use client";

import localFont from "next/font/local";
import "./globals.css";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import client from "../lib/apolloClient";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


import Providers from "../util/provider";

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  
  );
}
