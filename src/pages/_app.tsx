import { SessionContextProvider } from "@/contexts/SessionContext";
import { queryClient } from "@/services/queryClient";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import { QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </SessionContextProvider>
    </QueryClientProvider>
  );
}
