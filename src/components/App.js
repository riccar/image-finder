import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageGrid from './ImageGrid';
import Container from './UI/Container'; 
import GlobalStyle from './GlobalStyle';

class App extends React.Component {

  //Set arrays as empty to avoid null errors
  state = { images: [] }

  /**Use async/await to wait for the response to be received 
   * so it can be sent over to other components.
   * 
   * Use arrow function to ensure "this" references this component
   * and not the onSubmit that is calling the function
   */
  onSearchSubmit = async (term) => {
    const response =  await unsplash.get('/search/photos', {
      params: { query: term, per_page: 8 }
    });
    console.log(response.data);
    this.setState({ images: response.data.results });
  }

  render() {
    return ( 
      <Container>
        <GlobalStyle />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGrid images={this.state.images}/>
      </Container>
    );
  }
}

export default App;