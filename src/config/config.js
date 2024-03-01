// ** Third-Party Imports
import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";

const projectId = "8cad1237cb170928aec376b7d62b6dda";

export const config = createConfig({
  chains: [mainnet],
  multiInjectedProviderDiscovery: false,
  connectors: [
    injected({ target: "metaMask" }),
    walletConnect({
      projectId,
      metadata: {
        name: "Running Fish",
        url: "https://www.koreanfish.xyz",
      },
    }),
    coinbaseWallet({
      appName: "Running Fish",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});
