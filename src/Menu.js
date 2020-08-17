import React from 'react'

const Menu = ({infoper,deletePer}) => {
  

  
    
    return (
        <div>
          
          <div>
            <h1>{infoper.Name}</h1>
            <h1>{infoper.Age}</h1>
            <h1>{infoper.classe}</h1>
            <button onClick={()=>deletePer(infoper.Name)}>delete</button>
          </div>
  

        </div>
    )
}

export default Menu
