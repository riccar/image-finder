import React, { useState, useRef, useEffect, useCallback } from 'react';


const useCalculateSpans = () => {
  //const ref = useRef(null);
  //const selector = ref.current;
  const [spans, setSpans] = useState(1);

  /*useEffect(() => {

    const calculateSpans = e => {
      const height = e.clientHeight;
      const newSpans = Math.ceil(height / 10 + 1);
      setSpans(newSpans);
    }

    if (selector) {
      selector.addEventListener('load', calculateSpans, false);
      console.log(selector);
      //setSpans(selector.value);
      return () => {
        selector.removeEventListener('load', calculateSpans, false)
      }
    }
    //Add a JS load event listener
  }); *///Empty array to execute this useEffect only one time*/

  const ref = useCallback(node => {
    if (node !== null) {
      const height = node.clientHeight;
      if (height > 0) {

        const newSpans = Math.ceil(height / 10 + 1);
        setSpans(newSpans);
      }
    }
  }, []);

  return [ ref, spans ];
}

export default useCalculateSpans;