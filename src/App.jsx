import Cart from "./comnponents/Cart.jsx";
import Header from "./comnponents/Header";
import Meal from "./comnponents/Meal";
import { CartContextprovider } from "./store/CartContext";
import { UserContextprovider } from "./store/Usercontext.jsx";

function App() {
  return (
    <>
    <UserContextprovider>
    <CartContextprovider>
     <Header></Header>
     <Meal></Meal>
     <Cart></Cart>
    </CartContextprovider>
    </UserContextprovider>
    </>
  );
}

export default App;
