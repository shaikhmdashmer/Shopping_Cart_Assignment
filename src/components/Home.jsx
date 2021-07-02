import React, { useEffect, useState } from 'react';
import "./home.css";
import Product from './Product';
import axios from 'axios';

const Home = () => {
    
    const [productList, setProductList] = useState([]);

    useEffect(() => {
    
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                let products = response.data;
                setProductList(products)
                // console.log(products)
            })
            .catch((error) => console.log(error))
       
    },[])
    
    return (
        <div className="home">
            <div className="home_row">
                {productList && productList.map((item) => (
                    <Product curitem={item}/>
                    
                ))}
            </div>
        </div>
    );
};

export default Home;