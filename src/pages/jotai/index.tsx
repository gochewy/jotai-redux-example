import type { NextPage } from "next";
import getSdk from "../../lib/sdk/getSdk";

const Jotai: NextPage = () => {
  const { data } = getSdk().useGetContent("/Jotai/GetContent");

  console.log("@@ data: ", data);

  return (
    <div className="container">
      <h1>Jotai</h1>
    </div>
  );
};

export default Jotai;