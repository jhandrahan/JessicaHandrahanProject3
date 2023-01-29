import Item from './Item'
 

const Gallery = ({recipeArray, loading}) => {    
    return(
        <div>
            <ul className="recipeImages">
                {
                    loading ? <p><span>Hmmm... No Recipes Found. </span>  Try again with some different keywords.</p>
                    
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