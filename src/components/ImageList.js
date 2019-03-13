import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = props => {
  //JS object de-structure. Add to the map image attributes so they
  //can be called without repeating the image name
  const images = props.images.map( image => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{images}</div>
    
};

export default ImageList;