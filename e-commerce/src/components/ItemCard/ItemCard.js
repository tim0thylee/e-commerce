import React from 'react';
import {connect} from 'react-redux';
import './ItemCard.css';

import {addToCart, removeFromList} from '../../actions';

const ItemCard = props => {

    const {image} = props;

    const imageInsert = {
        backgroundImage:`url("${image.urls.thumb}")`,
        backgroundSize: 'cover',
        height: '90%',
        width: '90%',
        zIndex: 0,
    }

    const addToCartHelper = (image) => {
        // We add a price to each image we add to the object.
        image.value = 10;
        props.addToCart(image);
        props.removeFromList(image.id);
    }

    return (
        <div className="item-card">
            <div style={imageInsert}>
                <div className="overlay-card">
                    <button className="buy-button" onClick={() => addToCartHelper(image)}>Buy</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        images: state.images
    }
}

export default connect(mapStateToProps, {addToCart, removeFromList})(ItemCard);