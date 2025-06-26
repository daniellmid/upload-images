import React, {useState} from 'react';
import ImageList from './components/imageList/ImageList';
import UploadForm from './components/form/Form';
import SearchBar from './components/searchBar/SearchBar';


function App() {
  const [images, setImages] = useState([]);

  function handleImageUpload(newImage){
    setImages([...images, newImage]);
  }

  return (
    <div className="App">
      <UploadForm onUpload={handleImageUpload} />
      <SearchBar />
      <ImageList />
    </div>
  );
}

export default App;
