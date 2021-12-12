import {useState,useEffect} from 'react'
import Form from './components/Form'
import Todolist from './components/Todolist'
import Footer from './components/Footer'
import './App.css';

function App() {
  
  const[inputText,setInputText] =useState("")
  const[todos,setTodos]=useState([])
  const[status,setStatus] = useState("All")
  const[filteredTodos,setFilteredTodos] = useState([])
  

  useEffect(() =>{

    const filterHandler = () =>{
      
      switch(status){

        case'Completed':
          setFilteredTodos(todos.filter((todo)=>todo.completed===true))
          break;

        case'Active':
          setFilteredTodos(todos.filter(todo=>todo.completed===false))
          break;

        default:
          setFilteredTodos(todos)
          break;
      }
    }
  
      filterHandler();
  },[todos,status])




  return (
    <div className="App">
      <div className="todoapp">
      <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />
      <Footer status={status} setStatus={setStatus} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      </div>
      <div className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </div>
    </div>
  );
}

export default App;
