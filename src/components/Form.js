import { useState } from "react";

const Form = ({handleSubmit}) => {
    const [ userInput, setUserInput ] = useState('');
    
    const handleChange = (event) =>{
       setUserInput(event.target.value) 
      
    }


    return (
        <form action="" onSubmit={(event) => {handleSubmit(event, userInput)}}>
            <label htmlFor="search">Search</label>
            <input 
            type="text" 
            onChange={handleChange}
            value={userInput}
            />
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;