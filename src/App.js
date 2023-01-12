import {useEffect, useState} from "react"
import './App.css';
import Recipe from "./Recipe";


function App() {
  
const A = process.env.REACT_APP_APP_ID
const B = process.env.REACT_APP_APP_KEY



const [results, setResults] = useState([]);

const [search, setSearch] = useState("")

const [query, setQuery] = useState("chicken")



useEffect(() => {
  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${A}&app_key=${B}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.hits)
    setResults(data.hits)
  });
}, [query])

const handleChange = (e) => {
  setSearch(e.target.value)
}

const getSearch = (e) => {
  e.preventDefault();
  setQuery(search)
  setSearch("")
}

  return (
    <div className="App">
<form onSubmit={getSearch} className="search-form">
  <input type="text" value={search} onChange={handleChange} className="search-bar"/>
  <button type="submit" className="search-button"> search</button>
</form>

<div className="recipe">
{results.map((item, index) => {
        return (
         <Recipe 
         key={index}
         tittle={item.recipe.label}
         image={item.recipe.image}
         ingredients={item.recipe.ingredients}
         />
          
          
        )
      }
      
      ) }
</div>

     
    </div>
  );
}

export default App;
