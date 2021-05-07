import React from 'react'

const Todolist = (props) => {
    return (
        <div>
          <div className='font'>
                        
                     <i className="fas fa-times" style={{backgroundColor:'white'}} onClick={()=>{
                         props.onSelect(props.id);
                     }}></i>
                     <li> {props.text} </li>
                     </div>         
                     <hr/>
        </div>
    )
}

export default Todolist
