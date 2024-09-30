import React from "react";
import PropsEx1Child from "./PropsEx1Child";

const PropsEx1 = () => {
  let fun = () => {
    console.log("fun executed");
  };
  let a = 10;

  return (
    <div>
      <PropsEx1Child fun={fun} />a
    </div>
  );
};

export default PropsEx1;
