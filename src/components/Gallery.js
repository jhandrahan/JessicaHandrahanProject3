import Item from './Item'
 

const Gallery = ({recipeArray, loading}) => {    
   
    return(
        <div>
            <ul className="recipeImages">
                {
                    loading? <p>"Hmmm... No recipes, try again!"</p>
                    
                    :(recipeArray.map((recipeObject) =>{  
                    return (<Item key={recipeObject.id} recipeData={recipeObject} />  
                    )     

                  }))
 
                }

            </ul>
        </div>
    )
}
export default Gallery;