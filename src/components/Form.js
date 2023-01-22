import { useState } from "react";

const Form = ({handleSubmit}) => {
    const [ userInput, setUserInput ] = useState('');
    
    
    
    const handleChange = (event) =>{
       setUserInput(event.target.value) 
    }

    
    return (
        <form class="search" action="" onSubmit={(event) => { handleSubmit(event, userInput) }} >
            <label htmlFor="search"></label>
            <input 
            type="text" 
            placeholder="Enter type of food here" 
            onChange={handleChange}
            value={userInput}
            />
            <button type="submit">Find Recipe</button>
        </form>
    )
}

export default Form;