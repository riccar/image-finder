import React from 'react';

class SearchBar extends React.Component {

  state = { term: ''};

  //Called every time user types in the input
  //the JS event object is always available in the callback function
  //by convention on + <name of dom element> + <name of event>
  /*onInputChange(e) {
    console.log(e.target.value);
  }*/

  /*in JS the value "this" needs to be bind to the function to avoid
  undefined errors when called externally. By using arrow functions, the binding happens
  automatically.
  */
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  /*onInputChange called onChange event should not have parenthesis 
    When it's required to work as a callback after an event happens.
    If the parenthesis are added, the function will be called when
    the component is rendered.
    Other event property names: onClick, onChange, onSubmit
  */

  //Input is a controlled element since the component 
  //state controls what is saved and shown in the input
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label>Image Search</label>
            <input 
              type="text"
              value={this.state.term} 
              onChange={ e => this.setState({ term: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
} 

export default SearchBar;