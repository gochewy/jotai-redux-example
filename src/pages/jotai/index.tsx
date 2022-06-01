import type { NextPage } from "next";
import Header from "./components/Header";
import Widgets from "./components/Widgets";
import useFetchContent from "./hooks/useFetchContent";

const Jotai: NextPage = () => {
  useFetchContent();
  
  return (
    <div className="container">
      <h1>Jotai</h1>
      <Header />
      <Widgets />
    </div>
  );
};

export default Jotai;
