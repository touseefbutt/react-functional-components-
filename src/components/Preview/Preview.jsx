const Preview = ({ newProduct }) => {
    return (
        <div className='preview'>
            <h2>Preview our new item</h2>
            <h3>{newProduct.name}</h3>
            <h4>{newProduct.price}</h4>
            <h5>{newProduct.description}</h5>
        </div>
    )
}

export default Preview