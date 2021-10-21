import React from "react";

function Result({ result, userGuess }) {
  function checkIfGuessed() {
    if (result !== undefined) {
      return (
        <>
          <h2>{result}</h2>
          <br />
          <h2>{result === Number(userGuess) ? "Bravo" : "Manqué"}</h2>
        </>
      );
    }
  }

  return <>{checkIfGuessed()}</>;
}

export default Result;
