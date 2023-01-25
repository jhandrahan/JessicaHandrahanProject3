import { useState } from "react";

const Form = ({handleSubmit}) => {
    const [ userInput, setUserInput ] = useState('');
      
    const handleChange = (event) =>{
       setUserInput(event.target.value) 
    }

    return (
        <form className="search" action="" onSubmit={(event) => { handleSubmit(event, userInput) }} >
            <label htmlFor="search">Search for Recipes:</label>
            <input 
            type="text" 
            placeholder="ie. pasta" 
            onChange={handleChange}
            value={userInput}
            />
            <button type="submit" className="searchBtn">🔍</button>
        </form>
    )
}
export default Form;