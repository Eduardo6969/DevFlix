import React, { useState } from 'react';
export default function Header(props){

      const [search, setSearch] = useState("");

      function handleSearch(e){
            setSearch(e.target.value)
            console.log(e.target)

      }

      return (  
      <div className="Header"> 
             <div className ="Logo">DEVFLIX</div>
             <form action ="">
             <input
             type="text" 
             name="search" 
             id = "search" 
             onChange = {e => setSearch (e.target.value)}></input>
             <button type= "submit">programar</button>
                   
             </form>
            
    
      
      </div> 
    
      )
      }
     
        
    
          
