import React, {useState} from 'react';

const ProductCard = ({ product, addToCart}) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='product-card'>
                <h3> {product.title} </h3>
                <p> {product.price}</p>
                <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />

                <button onClick={() => setQuantity(quantity -1 )}> - </button>
                <button onClick={() => setQuantity(quantity + 1 )}> + </button>
                <button onClick={() => addToCart(product, quantity)}> Add to cart</button>
        </div>
    );

};

export default ProductCard;