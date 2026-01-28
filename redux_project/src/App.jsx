import Cart from "./components/Cart"
import Product from "./components/Product"

const products = [
  {id:1, name:"shoes", price:1000,qauntity:0},
  {id:2, name:"Mobile", price:80000,qauntity:0},
  {id:3, name:"shirt", price:800,qauntity:0},
]


function App() {
  return (
    <>
      <div>
        <h1>Shopping Cart APP</h1>
        <h2>Products</h2>
        {products.map(product=>(
          <Product key={product.id} product={product}/>
        ))}

        <hr />

        <Cart/>
      </div>
    </>
  );
}

export default App
