import React from "react";
import "./ButtonStyle.scss"
import "../../styles/texts.scss"

const Button = ({ children }: { children: string }) => {
  return (
    <button className="ButtonContainer">
      <p className="ButtonValue">{children}</p>
    </button>
  );
};
export default Button;
