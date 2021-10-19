import React, {useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Persons from './components/Persons';
import axios from "axios";
import './App.css';

function App() {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
        .get(`http://localhost:9696/getAll/persons`)
        .then((response) => {
          setPersons(response.data);
        })
        .catch((err) => {
          console.error("Empty Persons Array !")
        });
  }, [])

  return (
    <>
      <Router>
    <div className='container'>  
       <Route path='/' exact render={() => (
         <>
         {persons.length > 0 ?
            <Persons persons={persons} />
          : 'No persons'}   
         </>
       )} />
    </div>
    </Router>
    </>
  );
}

export default App;
