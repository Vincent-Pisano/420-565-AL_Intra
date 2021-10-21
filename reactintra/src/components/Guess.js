import React from 'react'

function Guess({guess}) {

  return (
    <>
    <tr>
        <td>{guess.name}</td>
        <td>{guess.userGuess}</td>
        <td>{guess.randomNumber}</td>
    </tr>
    </>
  );
}

export default Guess;
