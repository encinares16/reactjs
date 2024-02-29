import { useState, useRef, useEffect } from "react";
import { TodoItems } from "./TodoItem";
import '../css/Todo.css';

let count = 0;
export const Todo = () => {
    const [todos, setTodos] = useState([]);

    const inputRef = useRef(null);
    const categoryRef = useRef([]);
    const statusRef =  useRef([]);

    const create = () => {
        if(document.getElementById("category").value === "") inputRef.current.value = "Untitled";
        if(document.getElementById("category_item").value === "Personal") categoryRef.current.value = "Personal";
        statusRef.current.value = "Not Done";

        const timeCreated =  `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()} · ${new Date().getHours()} : ${new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()} ${new Date().getHours() >= 13 ? "PM" : "AM"}`

        setTodos([...todos, {no:count++, text:inputRef.current.value, display:"", category:categoryRef.current.value, created:timeCreated, status:statusRef.current.value}]);
        localStorage.setItem("todos_count", count)
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem("todos_count");
      }, [])

    useEffect(()=>{
        setTimeout(()=>{
        console.log(todos)
        localStorage.setItem("todos",JSON.stringify(todos));
    },100)
    },[todos])

    const selectCategory = () => {
        categoryRef.current.value = document.getElementById("category_item").value;
    }

    return( <>
        <div className="todo">
            <h1 className="todo_title">TODO APP</h1>
            <div className="todo_category">
                <input ref={inputRef} id="category" type="text" placeholder='Create new todo here...' className='todo-input'/>
                <select name="Category" id="category_item" onChange={selectCategory}> 
                    <option className="category_option" value="Personal">Personal</option>
                    <option className="category_option" value="Home">Home</option>
                    <option className="category_option" value="Work">Work</option>
                    <option className="category_option" value="Business">Business</option>
                </select>
            </div>
            <button className="todo_create" onClick={create} >Create New Todo </button>
           
            <div className="todo_list">
                {todos.map((item,index)=>{
                return <TodoItems key={index} setTodos={setTodos} no={item.no} text={item.text} category={item.category} created={item.created} status={item.status} />
                })}
            </div>
        </div>
    </>);
}

