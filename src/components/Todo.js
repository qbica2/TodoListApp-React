import {useState,useEffect} from 'react'

function Todo({text,todo,todos,setTodos}) {
    const[editingText,setEditingText] = useState(text)

    const removeTodos=() => {
        
         setTodos(todos.filter((item)=>item.text !==todo.text))
        
    }

    const completeTodos=() => {

        setTodos(todos.map((item)=>{
            if(item.text=== todo.text){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    const editTextHandler = (e) =>{

      setEditingText(e.target.value);

    }

    useEffect(()=>{

        setTodos(todos.map((item)=>{
            if(item.id=== todo.id){
                return{
                    ...item,
                    text: editingText
                }
            }
            return item;
        }))

    },[editingText])


    return (
        <div>
            <li  className={`selectstyle ${todo.completed ? "completed" : ""}`}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={(e)=>{}} onClick={completeTodos}/> 
                     <label >
                         
                      <input 
                      type="text" 
                      className="new-todo" 
                      value={text} 
                      onChange={editTextHandler}
                      name=""
                      />
                      
                      </label>
                    <button className="destroy" onClick={removeTodos}></button>
                </div> 
            </li>
        </div>
    )
}

export default Todo;