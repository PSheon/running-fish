"use client";

// ** Third-Party Imports
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ** Component Imports
import HomeSection from "@/section/home";

// ** Config Imports
import { config } from "@/config/config";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <HomeSection />;
      </QueryClientProvider>
    </WagmiProvider>
  );
}
