import { DataContaxt } from "@/context/DataContaxt";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <DataContaxt>
        <Component {...pageProps} />
      </DataContaxt>
    </div>
  );
}
