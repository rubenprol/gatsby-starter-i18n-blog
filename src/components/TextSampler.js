import React from 'react';
import ReactSlider from '../components/ReactSlider'

const TextSampler = (props) => {
  return (
  <div>
    <h1>{props.sampleText}</h1>
    <ReactSlider />
  </div>
  );
};

export default TextSampler;