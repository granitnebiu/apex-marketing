import "~/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const quicksand = localFont({
   src: [
      //light 300
      {
         path: "./fonts/Quicksand-Light.woff2",
         weight: "300",
      },
      //normal or regular 400
      {
         path: "./fonts/Quicksand-Regular.woff2",
         weight: "400",
      },
      //medium 500
      {
         path: "./fonts/Quicksand-Medium.woff2",
         weight: "500",
      },
      //semibold - demibold 600
      {
         path: "./fonts/Quicksand-SemiBold.woff2",
         weight: "600",
      },
      //bold 700
      {
         path: "./fonts/Quicksand-Bold.woff2",
         weight: "700",
      },
   ],
   variable: "--font-quicksand",
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <main className={`${quicksand.variable}`}>
         <Component {...pageProps} />;
      </main>
   );
}
