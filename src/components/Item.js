const Item = ({ recipeData }) => {
  return (
    <li className="itemContainer">
      <a href={recipeData.sourceUrl}>
        <img src={recipeData.image} alt={recipeData.title} className="image" />
      </a>

      <div className="textContainer">
        <h2>{recipeData.title}</h2>
        <h3>Source: {recipeData.sourceName}</h3>
        <a className="link" href={recipeData.sourceUrl}>
          View Recipe
        </a>
      </div>
    </li>
  );
};
export default Item;
