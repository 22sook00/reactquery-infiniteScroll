import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const Main = () => {
  return (
    <main className="p-4">
      <Header />
      <List />
      <Footer />
    </main>
  );
};

export default Main;
