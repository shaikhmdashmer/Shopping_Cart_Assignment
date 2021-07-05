import React from 'react';
import "./checkoutProduct.css"
import { useStateValue } from './stateProvider';

const CheckoutProduct = ({id, image, description, price,}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutproduct_image"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_description">description : {description}</p>
                <p className="checkoutProduct_price">
                    <small> Price : ₹</small>
                    <strong>{price}</strong>
                </p>                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>

            
        
    );
};

export default CheckoutProduct;