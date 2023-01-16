import './App.css';
import Header from './components/Header'; 
import Form from './components/Form';
import Gallery from './components/Gallery'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios({
      baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        apiKey: 'cf6c7cb9ef804ec5a5ee4edd6f19b1ee',
        query: inputValue,
        number: 20
      }
    }).then((apiData) => {
      // console.log(apiData)
      setRecipes(apiData.data.results)
    })

  }, [inputValue]);

  const selectInputValue = (event, chosenInput) => {
        event.preventDefault();
        setInputValue(chosenInput);
    }

  return (
    <>
      <Header/>
      <Form handleSubmit={selectInputValue}/>
      <Gallery recipeArray={recipes}/>
    </>
  );
}

export default App;
