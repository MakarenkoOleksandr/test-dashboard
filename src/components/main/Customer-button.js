import { useState } from "react";

const Button = ({ status }) => {
  const [isActive, setIsActive] = useState(status === "active");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`customers__${isActive ? "inactive" : "active"}`}
      onClick={handleClick}
    >
      {isActive ? "Inactive" : "Active"}
    </button>
  );
};

export default Button;
