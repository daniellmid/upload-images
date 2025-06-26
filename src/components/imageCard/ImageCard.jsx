import React from 'react';
import './ImageCard.css';

export default function ImageCard(props){
    const { image, onDelete }= props;

    function handleDelete(){
        onDelete(image.id);
    }
    return(
        <div key={image.id} className="img-card">
            <button onClick={handleDelete} className="delete-button">X</button>
            <img src={image.dataUrl} alt={image.name} className="image" />
        </div>
    );
}