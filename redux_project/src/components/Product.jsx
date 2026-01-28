import {useDispatch} from 'react-redux'
import {addToCart} from '../store/cartSlice'

function Product({product}){
    const dispatch= useDispatch();
    // console.log(addToCart);
    return (
        <>
            <h1>{product.name}</h1>
            <p>$ {product.price}</p>
            <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
        </>
    )
}

export default Product;