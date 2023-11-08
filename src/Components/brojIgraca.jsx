import React, { useState } from "react";

const Broj = () => {
  const [broj, setBroj] = useState("");
  function handleChange(e) {
    setBroj(e.target.value);
  }
  return (
    <div>
      <h3>Izaberi broj igrača</h3>
      <input type="number" value={broj} onChange={handleChange} />
      <h1>Broj igrača je: {broj}</h1>
      <button onClick={() => setBroj("")}>Reset</button>
    </div>
  );
};

export default Broj;
