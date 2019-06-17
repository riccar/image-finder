import React, { useState, useEffect, useRef, memo } from 'react';
//import useCalculateSpans from './helpers/useCalculateSpans';

import Card from './UI/Card'

/**
 * After the image card render itself reach into the DOM and figure out its height
 * Set the image height on state to re-render component
 * On the second render assign a grid-row-end enough space so it's properly
 * spawned on multiple rows according to its height
 */
const ImageCard = (props) => {

  const [spans, setSpans] = useState(0);

  //useRef to hold the reference of an DOM object
  const imageRef = useRef(null);

  useEffect(() => {
    const calcSpans = () => {
      setSpans(calculateSpans(imageRef));
    }
    
    //Add a JS load event listener
    imageRef.current.addEventListener('load', calcSpans);
    let imgRef = imageRef.current;
    return () => {
      imgRef.removeEventListener('load', calcSpans);
    }
  }, []); //Empty array to execute this useEffect only one time*/

 /* const [imageRef, spans] =  useCalculateSpans();
  console.log(imageRef,spans);*/
  
  const { alt_description, urls } = props.image;

  return (
    <Card gridSpan={spans}>
      <img 
        ref={imageRef} 
        alt={alt_description}
        src={urls.regular}
      />
    </Card>
  );

}

export default memo(ImageCard);

//Helper function
const calculateSpans = (imageRef) => {
  const height = imageRef.current.clientHeight;
  /**
   * Divide image height between 10 to produce a proper 
   * span. So if img is 10px height, its span becomes 1 so it 
   * remains in one grid cell, but if its height is more than than 
   * it spans becomes 2 or more so taller images are 
   * spanned on multiple cells.
   * Add plus one to the end to round always to the next available cell
   * to avoid overlaps
   */
  return Math.ceil(height / 10 + 1);
  
}