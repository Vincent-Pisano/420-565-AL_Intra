import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Guesses from './components/Guesses';
import Form from './components/Form';
import Result from './components/Result';

function App() {

  const[guesses, setGuesses] = useState([]);
  const[currentGuess, setcurrentGuess] = useState({});
  
  useEffect(() => {
    axios.get("http://localhost:9696/getAll/guesses")
    .then((response) => {
      setGuesses(response.data);
    })
    .catch((err) => {
      console.log("It seem no guess could be found ...")
    });
  }, [currentGuess])

  function addGuess(guess) {
    setcurrentGuess({...guess})
    axios.post("http://localhost:9696/save/guess", guess)
    .then((response) => {
      console.log("Save is a success")
    })
    .catch((err) => {
      console.log("It seem an error occured while saving ...")
    });
  }

  return (
    <>
      <div className="div_center">
        <h1>Examen Intra</h1>
        <Form addGuess={addGuess}/>
        <Result userGuess={currentGuess.userGuess} result={currentGuess.randomNumber} />
      </div>
      <Guesses guesses={guesses} />
    </>
  );
}

export default App;
