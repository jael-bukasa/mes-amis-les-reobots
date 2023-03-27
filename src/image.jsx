
import './image.css'
 function Image ({users}) {


    return( <>
      {
        users.map((element)=>
       
        <>
 
        <div className='div1'>
          <div className='div2' >
            <img src={(`https://robohash.org/set_set1/${element.name}/3.14159?size=150x150`) } alt="" />
           <h4>{element.name }</h4>
           <h6>{element.email }</h6>
          </div>
        </div>
        
        </>)
      }
      </>
    )
 }
 export default Image;