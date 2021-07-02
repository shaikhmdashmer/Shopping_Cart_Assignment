import React from 'react';
import "./CheckoutPage.css"
import { useStateValue } from './stateProvider';
import CheckoutProduct from './CheckoutProduct';

const CheckoutPage = () => {
    const [{basket,},] = useStateValue();
    return (
        <div className="checkoutpage">
            <div className="chekoutpage_Left">
                <div>
                    <h3>Hello, User</h3>
                    <h2 className="checkoutpage_title">Shaikh Ashmer udden</h2>
                    {basket&& basket.map(item=>(
                        <CheckoutProduct id={item.id}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default CheckoutPage;