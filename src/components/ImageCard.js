import React from 'react';

import Card from './UI/Card'

/**
 * Let the image card render itself
 * Then, reach into the DOM and figure out the height of the image
 * Set the image height on state to re-render component
 * When rendering assign a grid-row-end enough space so it's properly
 * rendered
 */
class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {spans: 0};
    //Create a React Ref and assign it to the image element
    this.imageRef = React.createRef();
  }

  //Runs just after the component is rendered
  componentDidMount() {
    /**
     * By the time this function run images may not be available yet.
     * Hence attach a load event listener to it wait until the image
     * is loaded in order to access its height
     **/
    //Add a simple JS load event listener
    this.imageRef.current.addEventListener('load', this.setSpans);
   
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    /**
     * Divide image height between 10 to produce a proper 
     * span. So if img is 10px height, its span becomes 1 so it 
     * remains in one grid cell, but if its height is more than than 
     * it spans becomes 2 or more so taller images are 
     * spanned on multiple cells.
     * Add plus one to the end to round always to the next available cell
     * to avoid overlaps
     */
    const spans = Math.ceil(height / 10 + 1);
    this.setState({spans});
    //console.log(spans);
  }

  render() {

    const { description, urls} = this.props.image;

    return (
      <Card gridSpan={this.state.spans}>
        <img 
          ref={this.imageRef} 
          alt={description}
          src={urls.regular}
        />
      </Card>
    );
  }
}

export default ImageCard;