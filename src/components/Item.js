
const Item = ({recipeData}) => {
    console.log(recipeData)

    return(
        <li className="itemContainer">
            <img src={recipeData.image} alt={recipeData.title} />

            <div className="textContainer">
                <h2>{recipeData.title}</h2>
                <a className="link" href={recipeData.sourceUrl} target="_blank">View Recipe</a>
            </div>

        </li>
    )
}

export default Item;