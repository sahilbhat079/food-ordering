import React, { useEffect } from 'react'
import Mealitem from './Mealitem'

export default function Meal() {
    const [loadmeals, setMeals] = React.useState([])
useEffect(()=>{
async function fetchmeals(){
    
const response=await fetch('http://localhost:3000/meals')
if(!response.ok){
//
}
const meals=await response.json()
setMeals(meals);
console.log(meals);

}
fetchmeals();   


},[])



    return (
        <ul id='meals'>
            {
                loadmeals.map(meal => {
                    return (
                        <Mealitem key={meal.id} meal={meal}/>
                    )
                })
            }
      
    </ul>
  )
}
