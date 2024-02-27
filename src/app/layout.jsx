// ** Context Imports
import ContextProvider from "@/utils/ContextProvider";

// ** Style Imports
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/slick.min.css";
import "@/assets/css/slick-theme.min.css";
import GlobalStyles from "@/assets/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";

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
        <ContextProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ContextProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Running Fish",
  description: "It's a running fish",
};
