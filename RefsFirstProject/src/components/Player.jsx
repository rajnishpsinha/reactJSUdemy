import { useState } from "react";
export default function Player() {

  
  const [submitted, setSubmitted]= useState(false);
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerNameHandler = (event) => {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  };

  const clickHandler=(event)=>{
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>{submitted ?enteredPlayerName:'unknown entity'} </h2>
      <p>
        <input
          type="text"
          onChange={playerNameHandler}
          value={enteredPlayerName}
        />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
