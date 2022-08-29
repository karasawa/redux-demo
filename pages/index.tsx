import type { NextPage } from "next";
import { Provider } from "react-redux";
import { CartContainer } from "../components/CartContainer";
import { Layout } from "../components/Layout";
import { store } from "../store";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <Layout title="home">
        <CartContainer />
      </Layout>
    </Provider>
  );
};

export default Home;
