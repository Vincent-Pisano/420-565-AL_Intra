import React, { useState } from "react";

function Form({addGuess, randomNumber}) {
  const [guessFields, setGuessFields] = useState({
    name: "",
    userGuess: 0,
    randomNumber: 0,
  });

  function onCreatePost(e) {
    e.preventDefault();
    randomNumber = (Math.floor(1 + Math.random() * (6)));

    setGuessFields({
        ...guessFields,
        randomNumber: randomNumber,
      });

    addGuess(guessFields);
  }

  function setFields(e) {
    setGuessFields({
      ...guessFields,
      [e.currentTarget.id]: e.target.value,
    });
  }

  return (
    <>
      <form>
        <label htmlFor="name">Votre nom :</label>
        <input
          type="text"
          id="name"
          placeholder="Nom, prénom"
          value={guessFields.name}
          onChange={(e) => setFields(e)}
        />
        <br />
        <label htmlFor="userGuess">Votre guess :</label>
        <input
          type="number"
          id="userGuess"
          placeholder="entre 1 et 6"
          value={guessFields.userGuess}
          onChange={(e) => setFields(e)}
        />
        <br />
        <br />
        <input type="submit" onClick={(e) => onCreatePost(e)} />
        <br />
        <br />
      </form>
    </>
  );
}

export default Form;
