import React, { useContext } from 'react';
import headericon from '../assets/logo.jpg';
import Button from './Ui/Button';
import CartContext from '../store/CartContext';
import UserProgeressContext from '../store/Usercontext';

export default function Header() {
  const cartctx = useContext(CartContext);
  const progresctxvalue = useContext(UserProgeressContext);
  
  const totalitems = cartctx.items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  function handleShowCart() {
    progresctxvalue.showCart(); // ensure this function updates progress state correctly
  }

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={headericon} alt="Food app logo" />
        <h1>React foodApp</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalitems})
        </Button>
      </nav>
    </header>
  );
}
