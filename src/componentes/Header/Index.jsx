import React, { useState } from 'react';

export default function Header(props){

      const [search, setSearch] = useState("");

      function handleSearch(e){
            setSearch(e.target.value)

      }

      return (  
      <div className="Header"> 
             <div className ="Logo">DEVFLIX</div>
             <form>
             <input className ="entrada-texto" type="text" 
             name="search" 
             id = "search" 
             onChange = {e => setSearch (e.target.value)}></input>
             <button className ="botao" type= "submit">programar</button>
                   
             </form>
            
    
      
      </div> 
    
      )
      }
     
        
    
          
