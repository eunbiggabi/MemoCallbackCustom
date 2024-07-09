import React, {memo} from 'react'

const Child2 = ({name, tellMe}) => {
    console.log("render child components");
    return (
      <div style={{ border: '2px solid powderblue', padding: '10px'}}>
          <h3>Child</h3>
          <p>Name: {name}</p>
          <button onClick={tellMe}>Mommy Love Me?</button>
      </div>
    )
}

export default  memo(Child2);