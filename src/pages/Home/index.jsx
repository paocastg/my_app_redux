import React from 'react'
import {useSelector}  from 'react-redux'
//sirve para pedir info al store
const Home = () => {
   const data= useSelector((store)=> store)
   console.log('data', data)
    return (
        <div>
          Home  
        </div>
    )
}

export default Home
