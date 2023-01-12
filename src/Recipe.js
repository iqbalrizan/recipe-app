import React from 'react'
import "./recipe.css"

const Recipe = ({key, tittle, ingredients, image}) => {
  return (
    <div className='recipes'>
         <div key={key}>
          <h1 className='tittle'>{tittle}</h1>
          <ul className='re-ing'>
            {ingredients.map((ingredient) => {
                return(
                    <li className='re-list'>{ingredient.text}</li>
                )
            })}
          </ul>
          <img className='gambar' src={image} alt="" />
          
          </div>
    </div>
  )
}

export default Recipe