import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    const {description, urls} = props.image;

    const imageInsert = {
        backgroundImage:`url("${urls.thumb}")`,
        backgroundSize: 'cover',
        height: '90%',
        width: '90%'
    }

    return (
        <div className="item-card">
            <div style={imageInsert}>
            </div> 
        </div>
    )
}

export default ItemCard;