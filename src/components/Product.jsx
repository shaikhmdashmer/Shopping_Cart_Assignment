import React from 'react';
import { Card } from 'react-bootstrap';
import "./product.css";
import { useStateValue } from './stateProvider';

const Product = ({curitem,title}) => {
   console.log("data===>",curitem);

const [{basket},dispatch]= useStateValue();

const addToshoppingCart=()=>{
    dispatch({
        type : "ADD_TO_BASKET",
        item :{
            id : curitem.id,
            description : curitem.description,
            price : curitem.price,
            rating : curitem.rating,
            image : curitem.image
        }
    });
    
}

     return (
        <> 
          <Card bg="primary" text="white" style={{ width: '30rem',height:'40rem'}}>
          <div className="Cards">
            <div className="Card">
                <div className="card_info">
                    <p>{curitem.description}</p>
                    <p className="card_price">
                        <small> Price : &#8377;</small>
                        <strong>  {curitem.price}</strong>
                    </p>
                </div>
                <img src={curitem.image} alt=""/>
                <button onClick={addToshoppingCart}>Add To Cart</button>
            </div>
        </div>
  
  </Card>
        </>
    );
};

export default Product;