import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {

  //Very handy to set arrays as empty to avoid null errors
  state = { images: [] }

  /**Since this is an async request, by the time the response
   * is received, the onSearchSubmit is already exited and no longer
   * available so we need a way to receive the response so it
   * can be used and sent over to other components.
   * One option is to use the promise .then(()=> {}) callback that will be
   * executed when the response is received.
   * A better option is to use Async Await keywords
   * 
   * Use arrow function to ensure "this" references this component
   * and not the onSubmit that is calling the function
   */
  onSearchSubmit = async (term) => {
    const response =  await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return ( 
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;