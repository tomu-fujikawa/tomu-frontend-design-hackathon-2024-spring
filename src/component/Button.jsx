import React from "react";

export const Button = ({ buttonText, onClick }) => (
  <button className="button" onClick={onClick}>
    {buttonText}
  </button>
);