import React ,{ useState ,useRef} from 'react';
import Todolist from  './Todolist'

function App() {
  const[todos,setTodos]=useState([])
  const todoNameRef=useRef()
  function handleAddTodo(e){
     const name= todoNameRef.current.value
      if(name==='') return
      console.log(name)
  }
  return(
    <>
  <Todolist  todos={todos}/>
  <input ref ={"todoNameRef"} type="text" />
  <button onClick={handleAddTodo}>Add Todo</button>
  <button>Clear Completed</button>
  <div>0 left to do</div>
  </>
  )
}
export default App;
