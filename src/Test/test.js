import { useEffect } from "react";




const Test = () => {
    useEffect(() =>{
        return () =>{
            console.log('componente desmontado')
        }
       
    
    })
   return (
       <div>
           COMPONENTE TEST

       </div>
   )

}

export default Test
