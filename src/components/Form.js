
const Form = ({handleSubmit, handleChange, userInput}) => {
    return (
        <form className="search" action="" onSubmit={(event) => { handleSubmit(event, userInput) }} >
            <label htmlFor="search">Search for Recipes:</label>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="ie. pasta, pizza, noodles"
                    onChange={handleChange}
                    value={userInput}
                />
                <button type="submit" className="searchBtn">🔍</button>
                
            </div>
           
        </form>
    )
}
export default Form;