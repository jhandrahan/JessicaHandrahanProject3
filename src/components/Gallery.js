import Item from './Item'
const Gallery = ({recipeArray}) => {
    return(
        <div>
            <ul className="recipeImages">
                {
                    recipeArray.map((recipeObject) =>{
                    //   console.log(recipeObject)  
                      return <Item key={recipeObject.id} recipeData={recipeObject}/>
                    })
                }

            </ul>
        </div>
    )
}

export default Gallery;