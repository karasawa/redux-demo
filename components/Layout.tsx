import Head from "next/head";
import { FC, ReactNode } from "react";
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title = "default title", children }) => {
  const { isOpen } = useSelector((state: RootState) => state.modal);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {isOpen ? <Modal /> : <></>}
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
