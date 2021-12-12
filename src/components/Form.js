import React from 'react'

function Form({inputText,setInputText,todos,setTodos}) {

    const inputTextHandler = (e)=>{

        setInputText(e.target.value)
    }

    const submitToDoHandler = (e)=>{

        e.preventDefault()

        if(inputText===""){
            alert("write something to do")
            return false;
        }

        setTodos([
            ...todos, {text: inputText, completed: false,}
        ])

        setInputText("")
    }

todos.map((item,i)=>
    item.id=i
)

    return (
        <div className="header">
            <h1>todos</h1>
            <form onSubmit={submitToDoHandler}>
                <input
                value={inputText}
                onChange={inputTextHandler}
                name=""
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                />
		    </form>
        </div>
    )
}

export default Form;