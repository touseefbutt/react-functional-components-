import { TbShoppingCartPlus } from 'react-icons/tb'
// You have to pass the props in the parameter of the component
const Product = ({ product, addToCart }) => {
    // console.log('We are inside Product', props)
    return (
        <li>{product.name} costs ${product.price}. <small>{product.description}</small> <TbShoppingCartPlus onClick={() => addToCart(product)}/></li>
    )
}

export default Product