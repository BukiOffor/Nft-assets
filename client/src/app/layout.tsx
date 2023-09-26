"use client";
import Providers, { wagmiConfig } from "@/providers/walletconnect";
import store from "@/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { WagmiConfig } from "wagmi";
import { poppins } from "../fonts/fonts";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <html lang="en">
        <Providers />
        <Provider store={store}>
          <body className={`${poppins.className}`}>{children}</body>
        </Provider>
        <ToastContainer />
      </html>
    </WagmiConfig>
  );
}
