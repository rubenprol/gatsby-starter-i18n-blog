import React from 'react'
import ReactSlider from 'react-slider'

class FontSample extends React.Component {
 
  render() {
    return (
      <div>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
      </div>
    )
  }
}

export default FontSample;