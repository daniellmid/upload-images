import React, {useState, useRef} from 'react';
import "./Form.css";

export default function Form(props){
    const { onUpload } = props;
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const inputRef = useRef();

    function handleFileChange(e){
        const imageSelected = e.target.files[0];
        
        if(imageSelected && imageSelected.type.startsWith("image/") ){
            setFile(imageSelected);
            setError("");
            console.log(file, imageSelected);
        } else{
            setFile(null);
            setError("Select a valid image file.");
        }
    }

    function handleUpload(){        
        if(!file){
            return ;
        }

        const readFile = new FileReader();

        readFile.onloadend = function(){
            const newImage = {
                id: Date.now().toString(),
                name: file.name,
                dataUrl:readFile.result,
                uploadedAt: new Date().toISOString()
            };
            console.log(newImage);
            onUpload(newImage);
            setFile(null);
            setError("");
            
            if(inputRef.current){
                inputRef.current.value = null;
            }
        }
        readFile.readAsDataURL(file);
    }


    return(
        <>
            <div className="form-container">
                <input className="select" type="file" accept="image/*" onChange={handleFileChange} ref={inputRef} />
                <button className="button" onClick={handleUpload} disabled={!file}>
                    Upload
                </button>
                {error && <p className="error">{error}</p>}
            </div>
        </>
    )
}