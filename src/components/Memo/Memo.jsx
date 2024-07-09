import { useState } from 'react'
import Child from './Child';
import { useMemo } from 'react';
import Child2 from './Child2';
import { useCallback } from 'react';

const Memo = () => {

    const [parents, setParents] = useState(0);

    const incrementParentsAge = () => {
      setParents(parents + 1);
    }

    const name = useMemo(() => {
      return {
        lastName: "JEON",
        firstName: "Kyu",
      }
    }, []);

    const tellMe = useCallback(() => {
      console.log("I love Kyu")
    },[])

    console.log("render parents components");


  return (
    <div style={{ border: '2px solid navy', padding: '10px'}}>
        <h1>Parents</h1>
        <p>Age: {parents}</p>
        <button onClick={() => incrementParentsAge()}>Add parents age</button>
        <Child name={name} />
        <Child2 name={"Kyu"} tellMe={tellMe} />
    </div>
  )
}

export default Memo