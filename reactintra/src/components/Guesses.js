import React from "react";
import Guess from "./Guess";
import "../App.css"

function Guesses({ guesses }) {

    function emptyList() {
        return (
            <tr style={{textAlign:"center",}}>
                <td colSpan="3">Pas de guesses</td>
            </tr>
        );
    }

  return (
    <>
      <table >
        <thead>
          <tr>
            <th>Nom</th>
            <th>Guess utilisateur</th>
            <th>Numero Random</th>
          </tr>
        </thead>
        <tbody>
            {guesses.length !== 0 ? guesses.map((guess) => (
              <Guess
                key={guess.id}
                guess={guess}
              />
            )) : emptyList()}
        </tbody>
      </table>
    </>
  );
}

export default Guesses;
