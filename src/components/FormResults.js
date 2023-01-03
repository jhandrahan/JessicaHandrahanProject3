import Form from "./Form";

import { useEffect } from 'react';
import axios from 'axios';

const FormResults = () => {

 
    axios({
        baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
        params:{
            apiKey: 'cf6c7cb9ef804ec5a5ee4edd6f19b1ee',
            query: 'apple',
            number: 20
        }
    }).then((apiData) =>{
        console.log(apiData)
    })

    return (
        <section>
            <Form/>
        </section>
    )
}

export default FormResults;