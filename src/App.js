import { useRef, useState} from 'react'
import './App.css';

function App() {
  const [text, setText] = useState('')
  const ref= useRef(null)

  const handleOnChange =(e) => {
    setText()
  }
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
