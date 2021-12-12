import React from 'react'
import Todo from './Todo'

function Todolist({todos, setTodos,filteredTodos,setFilteredTodos}) {

    const toggleAll = () => {
       if (todos.length > 0) {
            let tempArr = filteredTodos.slice();

            const completed = (item)=> item.completed===true
            const notCompleted =(item)=> item.completed===false
            const markAllDOM =document.getElementById("markAll")
            const toggleDomArr =document.querySelectorAll(".toggle")
            
            if(tempArr.some(completed) && tempArr.some(notCompleted)){
                tempArr.forEach((todo)=>{
                    todo.completed=true
                    markAllDOM.checked=true;
                    for(let i = 0; i < toggleDomArr.length; i++) {
                        toggleDomArr[i].checked= true;
                    }
                })
            }else if(tempArr.some(completed)===false){
                tempArr.forEach((todo)=>{
                    todo.completed=true
                    markAllDOM.checked=true;
                    for(let i = 0; i < toggleDomArr.length; i++) {
                        toggleDomArr[i].checked= true;
                    }
                })
            }else if(tempArr.some(completed) || !tempArr.some(notCompleted)){
                tempArr.forEach((todo)=>{
                    todo.completed=false;
                    markAllDOM.checked=false;
                    for(let i = 0; i < toggleDomArr.length; i++) {
                        toggleDomArr[i].checked= false;
                    }
                })
            }

            setFilteredTodos(tempArr)
        } else {
            alert("Nothing to be done!")
        }

    }


    return (
        <div className="main">
            <input className="toggle-all" type="checkbox" id="markAll" />
            <label htmlFor="toggle-all" onClick={toggleAll} >Mark all as complete</label>

            <ul className="todo-list">
                {
                    filteredTodos.map((item, index) =>

                        <Todo
                         key={index}
                        text={item.text}
                        todos={todos}
                        setTodos={setTodos}
                        todo={item}
                        />
                    )
                }
            </ul>


        </div>
    )
}

export default Todolist;