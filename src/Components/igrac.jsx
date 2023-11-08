import React, { useState } from "react";

const Igrac = () => {
  const [igrac, setIgrac] = useState("");
  function handleChange(e) {
    setIgrac(e.target.value);
  }
  return (
    <div>
      <h3>Napiši ime igrača</h3>
      <input value={igrac} onChange={handleChange} />
      <h1>Igrač je: {igrac}</h1>
      <button onClick={() => setIgrac("")}>Reset</button>
    </div>
  );
};

export default Igrac;
