 import {currencyformat} from '../utils/formating'
import Button from './Ui/Button'
import CartContext from '../store/CartContext'
import { useContext } from 'react'

export default function Mealitem({meal}) {
    const cartCtx = useContext(CartContext)
    function handleaddmeal(){
cartCtx.addItems(meal);
    }


  return (
    <li className='meal-item'>
      <article>
         <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
    <div>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">{currencyformat.format(meal.price)}</p>
        <p className="meal-item-description">{meal.description}</p>
    </div>
    <p className="meal-item-actions">
        <Button onClick={handleaddmeal} >Add to Cart</Button>
    </p>
      </article>
    </li>
  )
}
