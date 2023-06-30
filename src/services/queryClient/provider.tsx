"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function QueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default QueryProvider;
