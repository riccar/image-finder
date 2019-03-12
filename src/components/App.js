import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


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
    const response =  await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 63ff086a0ebb7770e3d867bca4805c9fcef30315e95e45852157789218eb1cbd'
      }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return ( 
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;