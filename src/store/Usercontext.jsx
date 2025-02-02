import { createContext, useState } from "react";


 const UserProgeressContext=createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{},
});


export function UserContextprovider({children}){
const [UserProgress,SetUserprogress]=useState('');
function showCart(){
    SetUserprogress('cart');
}
function hideCart(){
    SetUserprogress('');
}
function showCheckout(){
    SetUserprogress('checkout');
}
function hideCheckout(){
    SetUserprogress('');
}


const userProgresCtx={
    progress:UserProgress,
    showCart:showCart,
    hideCart:hideCart,
    showCheckout:showCheckout,
}

    return <UserProgeressContext.Provider value={userProgresCtx}>{children}</UserProgeressContext.Provider>
}


export default UserProgeressContext;