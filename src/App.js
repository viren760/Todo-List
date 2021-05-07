
import react,{useState} from 'react';
import './App.css';
import Todolist from './TodoList';

  


function App() {
  const [input, setinput] = useState('');
  const [Items, setItems] = useState([]); 
   
  const ItemEvent= (event)=>{
    setinput(event.target.value);
  }

  const listofItems=()=>{
   
setItems((oldItems)=>{
   return [...oldItems, input]
})
setinput('');
  }

  const deletedItem =(id)=>{
   
    console.log('deleted');

    setItems((oldItems)=>{
      return oldItems.filter((arryElem,index)=>{
        return index !== id;
      })
    })
  }

  return (

<div className='outer-div'>
        <div className='inner-div'>
           <h2 className='head'>TODO - LIST </h2>
           <br/>
           <input className='input' type='text' value={input} placeholder='Add a Items' onChange={ItemEvent}/>
           <button className='btn' onClick={listofItems}> + </button>
           <ol>
              <li>
                 {
                   Items.map((i, index)=>{
                     return ( 
                       <Todolist 
                        key={index}
                        id={index}
                        text={i}
                        onSelect={deletedItem}
                       />
                      )})
                 }
               </li>  
            </ol> 
         </div> 
     </div>  
  );
}

export default App;
