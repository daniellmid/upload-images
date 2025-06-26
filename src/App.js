import React, {useState} from 'react';
import ImageList from './components/imageList/ImageList';
import UploadForm from './components/form/Form';
import SearchBar from './components/searchBar/SearchBar';


export default function App() {
  const [images, setImages] = useState([]);

  function handleImageUpload(newImage){
    setImages([...images, newImage]);
  }

  function handleDeleteImage(id){
    setImages(images.filter(image => image.id !== id));
  }
  return (
    <div className="App">
      <UploadForm onUpload={handleImageUpload} />
      <SearchBar />
      <ImageList images={images} onDelete={handleDeleteImage} />
    </div>
  );
}
