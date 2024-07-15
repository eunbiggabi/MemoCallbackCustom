import { useReducer, useState } from 'react'

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}


const reducer = (state, action) => {
  console.log(`reducer is working`, state, action)
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state;
  }
  
};


const Reduce = () => {

   const [number, setNumber] = useState(0);
   const [money, dispatch] = useReducer(reducer, 0)
   
  return (
    <div>
       <h1>Welcome to useReducer</h1>
       <p>Remain: $ {money}</p>
       <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000"/>
       <button onClick={() => dispatch({type: ACTION_TYPES.deposit, payload: number})}>Deposit</button>
       <button onClick={() => dispatch({type: ACTION_TYPES.withdraw, payload: number})}>Withdraw</button>
    </div>
  )
}

export default Reduce