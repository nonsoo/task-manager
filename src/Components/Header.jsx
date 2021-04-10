import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="header">
      <h1 className="header__Title">{title}</h1>
      <Button btnName="Add" onClick={onClick} />
    </div>
  );
};

export default Header;
