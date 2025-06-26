import React, {useState} from 'react';

export default function Form(){
    const [file, setFile] = useState(null);

    function handleFileChange(e){
        const imageSelected = e.target.file[0];
        
        if(imageSelected && imageSelected.type.startsWith('image/*') ){
            setFile(imageSelected);
        }
    }

    function handleUpload(){
        
    }


    return(
        <>
            <div>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button onClick = {handleUpload} disabled={!file}>
                    Upload
                </button>
            </div>
        </>
    )
}