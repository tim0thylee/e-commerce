import React from 'react';
import "./ImageList.css";
import ItemCard from '../ItemCard/ItemCard';

const ImageList = (props) => {

    const images = props.images.map((image)=>{
        return <ItemCard 
            key={image.id} 
            image={image}
            />
    })

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList