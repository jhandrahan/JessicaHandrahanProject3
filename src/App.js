import './App.css';
import './fonts/Hind-Regular.ttf'
import './fonts/Montserrat-VariableFont_wght.ttf'
import Header from './components/Header'; 
import Form from './components/Form';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import {useState } from 'react';
import axios from 'axios';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
   

    const handleClick= (event) => {
      event.preventDefault();
      setUserInput("");

      axios({
        baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
        params: {
          apiKey: 'dbce9eabfd0f437dbcce1553dc251387',
          query: userInput,
          number: 20,
          addRecipeInformation: true
        }

      }).then((apiData) => {
        setRecipes(apiData.data.results) 

        if (apiData.data.results.length === 0){
          setError(true);
          setLoading(false);
        }else{
          setError(false);
          setLoading(false);
        }
      })
      .catch((error) =>{
        if(error.response.status === 402){
          alert("Sorry 😓 The API that this site uses has reached its maximum calls for today, try again tomorrow")
        }else{
          alert("Hmmm... something went wrong... try again")
        }
      })
    }

    const handleChange = (event) => {
      setUserInput(event.target.value)  
    }
    
  return (
    <>
    <main>

    
      <Header/>
      <Form
        handleSubmit={handleClick}
        handleChange={handleChange}
        userInput={userInput}
        loading={loading}
      />
      <Gallery recipeArray={recipes} error={error}/>
      </main>
      <Footer/>
    </>
  );
}
export default App;

