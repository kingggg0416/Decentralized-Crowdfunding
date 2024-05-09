import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

import "./globals.css";
import { Layout, Providers } from "@/components";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Decentralized CrowdFunding",
  description:
    "Decentralized crowdfunding enables you to raise funds for your projects without the need for a middleman. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
