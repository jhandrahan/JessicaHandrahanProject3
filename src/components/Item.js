
const Item = ({recipeData}) => {
    console.log(recipeData)

    return(
        <li className="itemContainer">
            <img src={recipeData.image} alt={recipeData.title} />
            <h2>{recipeData.title}</h2>
            <a href={recipeData.sourceUrl}>View Recipe</a>
        </li>
    )
}

export default Item;