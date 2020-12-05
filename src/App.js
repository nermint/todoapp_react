import React,{ useState } from "react";
import "./styles.css";
import ListItems from "./ListItems";


function App() {

  const [items, setItems]=useState([]);
  const [taskName, setTaskName]=useState('');

 


  
  const getItem =(e)=>{
    e.preventDefault();
    let n=items.length;
    if( taskName ){
      setItems(prev => [...prev, 
        { name:taskName, id:n+1}]);
    }
    setTaskName('');
  }


  const deleteItem =(id)=>{
    const elem = items.filter(item => item.id !== id);
    //console.log(elem);
    setItems(elem);
  }


  return (
    <div className="App">
      <h2>To Do App</h2>
      <form id="to-do-form" onSubmit={getItem}>
      <input type="text" placeholder="Enter task"
       onChange={(e) => setTaskName(e.target.value)}
       value={taskName}/>
      <button type="submit">Add</button>
     </form>

    { items.map( item =>(
      <ListItems 
      item={item} 
      key={item.id}
      deleteItem={deleteItem}
       />
    ) ) }
    </div>
  );
}

export default App;
