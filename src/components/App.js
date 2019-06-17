import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageGrid from './ImageGrid';
import Container from './UI/Container'; 
import Spinner from './UI/Spinner';

import GlobalStyle from './GlobalStyle';

const App = () => {

  //Set arrays as empty to avoid null errors
  const [images, setImages ] = useState([]);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('Ecology')

  //InView Hook from interaction-observer
  //Defines the observer to be triggered
  //when a particular dom element link to ref
  //is visible in the viewport
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 1,
  });

  /**Use async/await to wait for the response to be received 
   * so it can be sent over to other components.
   * 
   * Use arrow function to ensure "this" references this component
   * and not the onSubmit that is calling the function
   */
  const onSearchSubmit = async (term, newPage) => {
    setTerm(term);
    const response =  await unsplash.get('/search/photos', {
      params: { query: term, page: newPage, per_page: 15 }
    });
    //On every new search, newPage = 1 and the image state is reset.
    if (newPage === 1) setImages(response.data.results);
    else setImages(prevState => [...prevState, ...response.data.results]);
    console.log(response)
  }

  useEffect(() => {
    setPage(page + 1);
    if (inView) {
      onSearchSubmit(term, page);
    }
  }, [inView]); //inView changes to true when the item is in the viewport and it changes to false otherwise

  return ( 
    <Container>
      <GlobalStyle />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageGrid images={images}/>
      <div ref={ref}>
        <Spinner  />
      </div>
      

    </Container>
  );
  
}

export default App;