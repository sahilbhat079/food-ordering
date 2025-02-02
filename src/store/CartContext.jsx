import {createContext, useReducer} from 'react';



const CartContext=createContext({
    items:[],
    addItems:(item)=>{},
    remoItems:(id)=>{}
});


function cartreducer(state, action) {
  if (action.type === "ADD_Item") {
    const existingitem = state.items.findIndex((item) => {
     return item.id === action.item.id;
    });

    const updateditems = [...state.items];
    if (existingitem > -1) {
      const updateditem = {
        ...state.items[existingitem],
        quantity: state.items[existingitem].quantity + 1,
      };
      updateditems[existingitem] = updateditem;
    } else {
      updateditems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updateditems };
  }




  if (action.type === "Remove_Item") {
    const existingitem = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingcartitem = state.items[existingitem];
    if (existingcartitem.quantity === 1) {
      const updateditems = [...state.items];
      updateditems.splice(existingcartitem, 1);
    } else {
      const updateditem = {
        ...existingcartitem,
        quantity: existingcartitem.quantity - 1,
      };
    }
    return { ...state, items: updateditems };
  }
}
    



export function CartContextprovider({children}){
const [cart,dispatcher] =useReducer(cartreducer,{items:[]})

const cartContextvalue={
    items:cart.items,
    addItems:(item)=>dispatcher({type:"ADD_Item",item}),
    removeItem:(id)=>dispatcher({type:"Remove_Item",id})
}
console.log(cartContextvalue)

return <CartContext.Provider value={cartContextvalue}>{children}</CartContext.Provider>
} 


export default CartContext;