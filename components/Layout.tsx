import Head from "next/head";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Navbar } from "./Navbar";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title = "default title", children }) => {
  return (
    <div>
      <Provider store={store}>
        <Head>
          <title>{title}</title>
        </Head>
        <Navbar />
        <main>{children}</main>
      </Provider>
    </div>
  );
};
