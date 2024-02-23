import ContextProvider from "@/src/utils/ContextProvider";
import "@/src/assets/css/bootstrap.min.css";
import "@/src/assets/css/slick.min.css";
import "@/src/assets/css/slick-theme.min.css";
import GlobalStyles from "@/src/assets/styles/GlobalStyles";

export const metadata = {
  title: "Bithu - NFT Minting/Collection Landing Page react-next js Template",
  description:
    "Bithu - NFT Minting/Collection Landing Page react-next js Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalStyles />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
