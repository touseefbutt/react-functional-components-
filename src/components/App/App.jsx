// Hooks
import { useState } from 'react'
// Components
import Product from '../Product/Product'
import Preview from '../Preview/Preview'
import CartItem from '../CartItem/CartItem'
// Data
import productsData from '../../utilities/data'
// CSS
import './App.css';

// Functional components are STATELESS
// Class components are STATEFUL
// Functional components do not use the keyword this
function App() {
  // console.log('App.js', productsData)
  // DOC useState: https://beta.reactjs.org/apis/usestate
  // Call useState at the top level of your component
  // Convention: const [something, setSomething] = useState(initial value) using array destructuring
  // useState returns two things:
  // 1. The current state of the state variable, can set an initial state
  // 2. The set function that lets you change state variable to a different value. camelCase
  const [products, setProducts] = useState(productsData)
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: ''
  })
  const [cart, setCart] = useState([])

  // console.log('newProduct', typeof newProduct)

  const handleChange = (e) => {
    // console.log(e.target.value)
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProducts([newProduct, ...products])
  }

  const addToCart = (product) => {
    // console.log('We are inside App.jsx. we clicked.', product)
    setCart([product, ...cart])
  }

  // Create another icon - check
  // Create a function to remove item from cart - check
  // Connect function with item - check

  // send index of map as props & function - check
  // click the icon, send item back to App - check instead we sent index back
  // filter() to remove the item out of the cart
  const removeFromCart = (id) => {
    // use filter with index to remove the item using the index
    // console.log('we clicked inside cartItem calling removefromcart', id)
    // What array are we trying to filter?
    // We need to filter specific from cart array
    // If the i doesn't match the id, return it. This will return a new array of the items we didn't delete.
    // console.log('before filter', cart)
    const newArr = cart.filter((item, i) => i !== id)
    // console.log('after filter', newArr)
    setCart(newArr)
  }

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' value={newProduct.name} onChange={handleChange} id='name' name='name' />
          <br />
          <label htmlFor='price'>Price</label>
          <input type='number' value={newProduct.price} onChange={handleChange} id='price' name='price' />
          <br />
          <label htmlFor='description'>Description</label>
          <textarea value={newProduct.description} onChange={handleChange} id='description' name='description' />
          <input type='submit' />
        </form>

        <Preview newProduct={newProduct} />
      </div>

      <div id="products-container">
        <div className="products">
          <h3>Please Purchase Our Excellent Products</h3>
          <ul>
            {
              products.map((product, i) => <Product key={i} product={product} addToCart={addToCart} id={i}/>)
            }
          </ul>
        </div>

        <div className="cart">
          <h3>Shopping Cart</h3>
          <ul>
            {
              cart.map((product, i) => <CartItem key={i} product={product} removeFromCart={removeFromCart} id={i} />)
            }
          </ul>
        </div>
      </div> {/* products-container */}
    </div>
  );
}

export default App;