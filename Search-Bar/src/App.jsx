import { useEffect, useState } from "react"


export default function APP() {
  const [searchItem, setSearchItem] = useState("");
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState("");
  const [cache, setCache] = useState({})
  const [isFocus, setIsFocus] =  useState(false);

  const fetchData = async () => {

    if(cache[searchItem]) {
      console.log("Returnn data from cache")
      return setRecipes(cache[searchItem]);
    }
    console.log(searchItem)
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${searchItem}`);
    await data.json().then((data) => {
      setRecipes(data.recipes)
      setCache((prev) => ({...prev, [searchItem]: data.recipes}))
    }
    ).catch((err) => setError(err))
    
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 400);

    return () => clearTimeout(timer)
  }, [searchItem])




  return (
    <div className="container">
      <div className="search-container">
        <input type="text" className="input" 
        placeholder="Search your url" value={searchItem} 
        onChange={(e) => setSearchItem(e.target.value)} 
        onFocus={() => setIsFocus((prev) => !prev)}
        onBlur={() => setIsFocus((prev) => !prev)}
        />

        {isFocus && <div className="search-hints">
          {recipes.map((recipe) => (
            <p className="items" key={recipe.id} onMouseDown={() => 
              setSearchItem(recipe.name)
            }>{recipe.name}</p>
          ))}
        </div>}
          {error && <p>Network not responding</p>}
      </div>

    </div>
  )
}