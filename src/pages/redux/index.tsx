import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/store";
import getSdk from "../../lib/sdk/getSdk";
import Header from "./components/Header";
import Widgets from "./components/Widgets";
import { actions } from "./slice";

const Redux: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(actions.getContent())
  }, []);

  return (
    <div className="container">
      <h1>Redux</h1>
      <Header />
      <Widgets />
    </div>
  );
};

export default Redux;
