import React from "react";

const Eventi = () => {
  const handleButtonClick = (event) => {
    console.log("Button click!");
  };

  const novitekst = (e) => {
    console.log("Novo slovo");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Klikni me!</button>
      <input type="text" onChange={novitekst} />
    </div>
  );
};

export default Eventi;
