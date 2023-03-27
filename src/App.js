import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Image from './image';


function App (){
const [data,setData] = useState([])
const [input,setInput] = useState('')


const search= useMemo(() =>{
  return data.filter(el=>el.name.toLocaleLowerCase().includes(input.length>=3? input.toLocaleLowerCase():''))
},[data,input] )

  

function getInput(e){
  setInput(e.target.value)
}


useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response =>Response.json())
  .then(Elements =>setData(Elements))
  
},[])
  return(<>
    <main>  
      <div className='contenaire'>
        <div className='titre'>
          <h1>MES AMIS LES ROBOTS</h1>
        </div>

        <div className='ipt'>
        <input type="text" placeholder="Rechercher par son nom" id='in' onChange={getInput} />
        </div>
       
        <div className='sous-contenaire'>
          <div className='images'>
         <Image  users={search}  />
          </div>
        </div>
      </div>
    </main>
  </>)
}
export default App