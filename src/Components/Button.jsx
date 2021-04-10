import React from "react";

const Button = ({ btnName, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
