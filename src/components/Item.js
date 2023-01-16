
const Item = ({recipeData}) => {
    console.log(recipeData)

    return(
        <li className="itemContainer">
            <h3>{recipeData.title}</h3>
            <img src={recipeData.image} alt={recipeData.title} />
        </li>
    )
}

export default Item;