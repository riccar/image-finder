import React, { useState } from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageGrid from './ImageGrid';
import Container from './UI/Container'; 
import GlobalStyle from './GlobalStyle';

const App = () => {

  //Set arrays as empty to avoid null errors
  const [images, setImages ] = useState([]);

  /**Use async/await to wait for the response to be received 
   * so it can be sent over to other components.
   * 
   * Use arrow function to ensure "this" references this component
   * and not the onSubmit that is calling the function
   */
  const onSearchSubmit = async (term) => {
    const response =  await unsplash.get('/search/photos', {
      params: { query: term, per_page: 20 }
    });
    console.log(response.data);
    setImages(response.data.results);
  }

  return ( 
    <Container>
      <GlobalStyle />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageGrid images={images}/>
    </Container>
  );
  
}

export default App;