import { TbShoppingCartX } from 'react-icons/tb'

const CartItem = ({ product, removeFromCart, id }) => {
    return (
        <li>{product.name} costs ${product.price}. <small>{product.description}</small> <TbShoppingCartX onClick={() => removeFromCart(id)}/></li>
    );
}

export default CartItem;