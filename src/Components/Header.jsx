import React from "react";
import Button from "./Button";

const Header = ({ title, onShow, btnName }) => {
  return (
    <div className="header">
      <h1 className="header__Title">{title}</h1>
      <Button btnName={btnName ? "Close" : "Add"} onClick={onShow} />
    </div>
  );
};

export default Header;
