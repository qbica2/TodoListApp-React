import React from 'react'

function Footer({filteredTodos,status,todos,setStatus,setTodos}) {

	const completed= todos.filter((item)=>item.completed===true)
	
	const handleClear = () => {
		setTodos(filteredTodos.filter((item)=>item.completed!==true))
	  };

    return (
        <div className={`footer ${todos.length===0 ?"hidden" :""}`} >
            <span className="todo-count">
			<strong>{todos.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li onClick={()=> setStatus("All")}>
				<a className={`${status==="All"?"selected": "" }`} >All</a>
			</li>
			<li onClick={()=> setStatus("Active")}>
				<a className={`${status==="Active"?"selected": "" }`} >Active</a>
			</li>
			<li onClick={()=> setStatus("Completed")}>
				<a className={`${status==="Completed"?"selected": "" }`} >Completed</a>
			</li>
		</ul>

		
		<button className={`clear-completed ${completed.length===0? "hidden" : ""}`} onClick={handleClear}>
			Clear completed
		</button>
        </div>
    )
}

export default Footer;
