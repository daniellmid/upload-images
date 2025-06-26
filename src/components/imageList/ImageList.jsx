import React from 'react';
import ImageCard from '../imageCard/ImageCard';
import './ImageList.css';

export default function ImageList(props){
    const { images, onDelete } = props;

    if(images.length == 0){
        return <p>No images uploaded yet.</p>
    };
    return(
        <div className="img-container">
            {images.map((image) => (
                <ImageCard key={image.id} image={image} onDelete={onDelete} />
            ))}
        </div>
    );
}

