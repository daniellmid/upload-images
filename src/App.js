import React from 'react';
import ImageList from './components/imageList/ImageList';
import UploadForm from './components/form/Form';
import SearchBar from './components/searchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>Images Upload App</h1>
      <UploadForm />
      <SearchBar />
      <ImageList />
    </div>
  );
}

export default App;
