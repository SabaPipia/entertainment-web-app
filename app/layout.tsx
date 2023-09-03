"use client";

import "./globals.css";

import { Provider } from "react-redux";
// import { store } from "@/store/authReducer";

import { Inter } from "next/font/google";
import RouteGuard from "./RouteGuard";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";
import { metadata } from "@/meta";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/authReducer"; // Make sure to provide the correct path
const inter = Inter({ subsets: ["latin"] });

const pageMetadata = metadata.default;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>{pageMetadata.title}</title>
      </head>
      <body className={`${inter.className} bg-darkBlue`}>
        <Provider store={store}>
          <RouteGuard>
            <PersistGate loading={null} persistor={persistor}>
              <div className="flex max-md:flex-col h-full">
                <div className="h-screen max-md:h-auto">
                  {pathname.includes("Authentication") ? null : <Navigation />}
                </div>
                <div className="w-[calc(100%-108px)] p-6 max-md:w-full max-[580px]:pt-0">
                  {children}
                </div>
              </div>
            </PersistGate>
          </RouteGuard>
        </Provider>
      </body>
    </html>
  );
}
