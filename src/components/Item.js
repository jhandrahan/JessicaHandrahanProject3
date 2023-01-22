
const Item = ({recipeData}) => {
    console.log(recipeData)

    return(
        <li className="itemContainer">
            <h3>{recipeData.title}</h3>
            <img src={recipeData.image} alt={recipeData.title} />
            <a href={recipeData.sourceUrl}>Click Here for Recipe</a>
        </li>
    )
}

export default Item;