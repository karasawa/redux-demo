import type { NextPage } from "next";
import { CartContainer } from "../components/CartContainer";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <CartContainer />
    </Layout>
  );
};

export default Home;
