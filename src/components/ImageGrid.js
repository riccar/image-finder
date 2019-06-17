import React from 'react';

import Grid from './UI/Grid';
import ImageCard from './ImageCard';

const ImageGrid = props => {
 
  const images = props.images.map( image => {
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <>
      <Grid>{images}</Grid>
    </>
  )
    
};

export default ImageGrid;