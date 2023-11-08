import { useState } from "react";

export default function Counterbasket() {
  const [points, setPoints] = useState(0);

  const [count, setCount] = useState(0);

  function increment() {
    setPoints((prevState) => prevState + 1);
  }

  function broj() {
    setCount((prije) => prije + 1);
  }

  return (
    <>
      <h1>Ukupan broj poena igrača: {points}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
          broj();
        }}
      >
        Trica
      </button>

      <button
        onClick={() => {
          increment();
          increment();
          broj();
        }}
      >
        Dvica
      </button>
      <button
        onClick={() => {
          increment();
          broj();
        }}
      >
        Slobodno bacanje
      </button>
      <button
        onClick={() => {
          setPoints(0);
          setCount(0);
        }}
      >
        Reset
      </button>
      <h3> Broj ostvarenih ubačaja : {count}</h3>
    </>
  );
}
