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
        {/* Meta */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Link */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/seo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/seo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/seo/favicon-16x16.png"
        />
        <link rel="manifest" href="/seo/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/seo/safari-pinned-tab.svg"
          color="#5bbad5"
        />
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
