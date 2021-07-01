import { useRef, useState, useEffect, useMemo} from 'react'
import './App.css';
import Test from './Test/test';

function App() {
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const ref= useRef(null)
  const [show,setShow] =useState(false)

  useEffect(()=> {
    console.log('COMPONENTE MONTADO')
  }, [])

  useEffect(()=> {
    console.log('COMPONENTE actualizado')
  }, [text])

  useEffect(()=> {
    console.log('COMPONENTE desMONTADO')
  }, [])



  const jsx= ()=>{
    // console.log('retornando jsx')
  }
  const color = useMemo(() =>{
    return(Math.random() *10000000000).toString().split('.')[1]
  }, [text2])

  const renderJsx = useMemo(()=>jsx(),[text])
   

  //  useEffect(() => {
  //    ref.current.focus()
  //  }, [])

  const handleOnChange =(e) => {
    setText(e.target.value)
  }

  const handleOnChange2 =(e) => {
    setText2(e.target.value)
  }

  

  // console.log('color', `#${color}`)
  // console.log('text',text)
  // console.log('ref',ref.current)

  return (
    <div style={{ paddingLeft: '100px'}}>
     <input type="text" value={text} onChange={handleOnChange} ref={ref} id="text" />
     <input type="text" value={text2} onChange={handleOnChange2} ref={ref} id="text" />
     <button 
     style={{background:`#${color}`}} 
     id="btn" 
     onClick={()=> {
       ref.current.focus()
       setShow(prevState => !prevState)
      }
     }
     >
       Focus
      </button>
     <br/>
     {show && <Test/>}
     PROBANDO HOOKS
      {renderJsx}
    </div>
  );
}

export default App;
