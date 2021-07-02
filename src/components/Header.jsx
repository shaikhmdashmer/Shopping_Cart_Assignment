import React from "react";
import "./header.css";
import back from "../img/back.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";


const Header = () => {
  const [{ basket, },] = useStateValue();

  return (
    <>
    
      <div className="header">
        <Link to="/">
          <img src={back} alt="logo" className="logo" />
          
        </Link>
        <div className="header_nav">
          
        
          <Link to="/checkout">
            <div className="header__optionBasket">
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
              <ShoppingBasketIcon className="Basket" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
