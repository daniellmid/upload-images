
export function getImagesFromLS(){
    const images = localStorage.getItem("images");
    return images ? JSON.parse(images) : [];
}

export function setImagesToLS(images){
    localStorage.setItem("images", JSON.stringify(images));
}

export function addImageToList(image){
    const images = getImagesFromLS();
    images.push(image);
    setImagesToLS(images);
}

export function deleteImage(id){
    const images = getImagesFromLS().filter(image => image.id !== id);
    setImagesToLS(images);
}