"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import MainWindow from "@/ui/MainWindow";

import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <SessionProvider>
        <MainWindow />
      </SessionProvider>
    </Provider>
  );
}
