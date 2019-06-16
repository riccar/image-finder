import React, { useState } from 'react';

import Segment from './UI/Segment';
import Form from './UI/Form';

const SearchBar = (props) => {

  //useState hook to handle state for functional components
  const [ term, setTerm ] = useState('Ecology');

  /*in JS the value "this" needs to be bind to the function to avoid
  undefined errors when called externally. By using arrow functions, the binding happens
  automatically.
  */
  const onFormSubmit = e => {
    e.preventDefault();
    props.onSubmit(term);
  }

  /*onFormSubmit called via onSubmit event should not have parenthesis 
    When it's required to work as a callback after an event happens.
    If the parenthesis are added, the function will be called when
    the component is rendered.
    Other event property names: onClick, onChange, onSubmit
  */

  //Input is a controlled element since the component 
  //state controls what is saved and shown in the input
  
  return (
    <Segment>
      <Form onSubmit={onFormSubmit}>
        <Form.FormLabel>Image Search</Form.FormLabel>
        <input 
          type="text"
          value={term} 
          onChange={e => setTerm(e.target.value)} 
        />
      </Form>
    </Segment>
  )
} 

export default SearchBar;