import { useInput } from './useInput'

function displayMessage(message) {
 alert(message)
} 

const Custom = () => {
    
    const [inputValue, handleChange, handleSubmit] = useInput('Hello', displayMessage)

  return (
    <div>
        <h1>Use Input</h1>
        <input value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
}

export default Custom