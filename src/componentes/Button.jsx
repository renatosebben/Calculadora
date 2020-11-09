import React from "react";
import "./Button.css";

export default (props) => {
  let classCss = "button ";
  classCss += props.operation ? "operation" : "";
  classCss += props.double ? "double" : "";
  classCss += props.triple ? "triple" : "";
  return (
    <button
      onClick={e => props.click && props.click(props.label)}
      className={classCss}
    >
      {props.label}
    </button>
  );
};
