"use client";

import "./globals.css";

import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { metadata } from "@/meta";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/authReducer";
import { DataContextTypes, DataTypes } from "@/types";
import { createContext, useEffect, useState } from "react";

import RouteGuard from "./RouteGuard";
import Navigation from "@/components/Navigation";
import Data from "@/data.json";
import ShowsContextProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });
const pageMetadata = metadata.default;

export const dataContext = createContext<DataContextTypes>({
  data: [],
  setData: () => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [data, setData] = useState<DataTypes[]>(Data);
  return (
    <html lang="en">
      <head>
        <title>{pageMetadata.title}</title>
      </head>
      <body className={`${inter.className} bg-darkBlue h-screen`}>
        <Provider store={store}>
          <RouteGuard>
            <PersistGate loading={null} persistor={persistor}>
              <dataContext.Provider value={{ data, setData }}>
                <ShowsContextProvider>
                  <div className="flex max-md:flex-col h-full self-center">
                    {pathname === "/error" ? null : pathname.includes(
                        "Authentication"
                      ) ? null : (
                      <div className="h-screen max-md:h-auto">
                        <Navigation />
                      </div>
                    )}

                    <div
                      className={`${
                        pathname === "/error" ||
                        pathname.includes("Authentication")
                          ? "w-full"
                          : "w-[calc(100%-108px)] p-6"
                      }  max-md:w-full max-[580px]:pt-0 h-full`}
                    >
                      {children}
                    </div>
                  </div>
                </ShowsContextProvider>
              </dataContext.Provider>
            </PersistGate>
          </RouteGuard>
        </Provider>
      </body>
    </html>
  );
}
