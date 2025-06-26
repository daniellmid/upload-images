import React, {useState} from 'react';
import ImageList from './components/imageList/ImageList';
import UploadForm from './components/form/Form';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';


export default function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  const filterImages = images.filter(image => {
    return image.name.toLowerCase().includes(search.toLowerCase())
  });

  function handleImageUpload(newImage){
    setImages([...images, newImage]);
  }

  function handleDeleteImage(id){
    setImages(images.filter(image => image.id !== id));
  }
  return (
    <div className="App">
      <UploadForm onUpload={handleImageUpload} />
      <SearchBar searchValue={search} onChange={setSearch}/>
      <ImageList images={filterImages} onDelete={handleDeleteImage} />
    </div>
  );
}
