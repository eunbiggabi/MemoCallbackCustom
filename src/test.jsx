import React from 'react'

const Test = () => {

    function add(x, y) {
        return [x+y, x*y];
    }

    const [sum, multiple] = add(4,1);

  return (
    <div>
        <div className="">
            <h2>{sum} and {multiple}</h2>
        </div>
    </div>
  )
}

export default Test