import React, { useContext } from 'react';
import Modal from '../comnponents/Modal.jsx';
import CartContext from '../store/CartContext';
import { currencyformat } from '../utils/formating.js';
import Button from './Ui/Button';
import UserProgeressContext from '../store/Usercontext.jsx';

export default function Cart() {
  const cartctx = useContext(CartContext);
  const UserprogressCtx = useContext(UserProgeressContext);

  const total = cartctx.items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const handleCloseModal = () => {
    // Implement closing logic, for example, by changing the `progress` in context
    UserprogressCtx.setProgress(''); // or any other value that closes the modal
  };

  const handleCheckout = () => {
    // You can handle the checkout logic here (navigate to a checkout page or trigger a checkout action)
    console.log("Proceed to checkout");
  };

  return (
    <Modal className='modal' open={UserprogressCtx.progress === 'cart'}>
      <h2>Your cart</h2>
      <ul>
        {cartctx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className='cart-total'>{currencyformat.format(total)}</p>
      <p className='modal-actions'>
        <Button onClick={handleCloseModal} textOnly>
          Close
        </Button>
        <Button onClick={handleCheckout}>
          Check out
        </Button>
      </p>
    </Modal>
  );
}
