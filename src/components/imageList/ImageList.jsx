import React from 'react';
import './ImageList.css';

export default function ImageList(props){
    const { images } = props;

    if(images.length == 0){
        return <p>No images uploaded yet.</p>
    }
    return(
        <>
            <div className="img-container">
                {images.map((image) => (
                    <div key={image.id} className="img-card">
                        <img src={image.dataUrl} alt={image.name} className="image" />
                    </div>
                ))}
            </div>
        </>
    )
}

