import { useDispatch,useSelector } from "react-redux";
import {removeFromCart,increaseQuantity,decreaseQuantity} from "../store/cartSlice"

function Cart(){
    const cartItems=useSelector(state=>state.cart.items);
    // console.log(state.cart.items);
    const dispatch = useDispatch();

    return (
        <>
        <h2>CART</h2>

        {cartItems.map(item=>(
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.quantity}</p>

                <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button>
                <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>

            </div>
        ))}
        </>
    )
}

export default Cart;