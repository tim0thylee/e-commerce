import React from 'react';
import {connect} from 'react-redux';

import "./Checkoutpage.css";
import Navbar from "../../components/Navbar/Navbar";

const Checkoutpage = props => {

    const iterateCart = props.cart.map((item) =>{
        const imageInsert = {
            backgroundImage:`url("${item.urls.thumb}")`,
            backgroundSize: 'cover',
            height: '100px',
            width: '100px',
            zIndex: 0,
        }
        return (
            <div className="cart-item" key={item.id}>
                <div style={imageInsert}>
                </div>
                <h1>{item.alt_description}</h1>
                <h1>${item.value}</h1>
            </div>
        )
    })

    return (
        <div className="container">
            <Navbar />
            {console.log(props.cart)}
            <div className="product-grid">
                <div className="title-line">
                    Poster Store
                    </div>
                <div className="cart-grid-body">
                    <h1 className="cart-title">Shopping Cart</h1>
                    <div className="cart-body">
                        {iterateCart}
                    </div>
                    <div className="total-value">
                        Total: ${props.cart.length * 10}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cart: state.cart}
}

export default connect(mapStateToProps)(Checkoutpage);