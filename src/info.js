import React from "react";
import "./styles/style.css";

const Info = () => {
  let myStr = ["a", "b", "c"];
  return (
    <div className="Info">
      <p>我的字母:</p>
      {myStr.map((str) => {
        return <p>我的字母有{str}</p>;
      })}
    </div>
  );
};

export default Info;
