import React, {memo} from 'react'

const Child = ({name}) => {

    console.log("render child components");
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px'}}>
        <h3>Child</h3>
        <p>LastName: {name.lastName}</p>
        <p>FirstName: {name.firstName}</p>
    </div>
  )
}

export default memo(Child);