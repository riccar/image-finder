import './ImageList.css';
import React from 'react';


const ImageList = props => {
  //JS object destruction. Add to the map image attributes so they
  //can be called without repeating the image name
  const images = props.images.map(({id, urls, description}) => {
    return <img key={id} src={urls.regular} alt={description} />
  });

  return <div className="image-list">{images}</div>
    
};

export default ImageList;