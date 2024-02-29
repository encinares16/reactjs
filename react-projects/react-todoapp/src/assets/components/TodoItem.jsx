import close from '../svgs/svg - close.svg';
import '../css/TodoItem.css';

// eslint-disable-next-line 
export const TodoItems = ({no, text, category, created, status, setTodos}) => {

    const deleteTodo = (no) => {
      let data = JSON.parse(localStorage.getItem("todos"));
      data = data.filter((todo)=> todo.no!==no)
      setTodos(data)
    }
    
    const toggle = (no) => {
      let data = JSON.parse(localStorage.getItem("todos"));
      for (let i = 0; i < data.length; i++) {
        if (data[i].no===no) {
          if (data[i].status==="Not Done") {
            data[i].status = "Done"
            document.getElementById("status").classList.add("done");
          } else {
            data[i].status = "Not Done"
          }
          break;
        }
      }
      setTodos(data)
    }

  return( <>
    <img className='cross_icon' onClick={()=>{deleteTodo(no)}} src={close}/>
    <div className="todo_items">
      <p className="created" >{created}</p>
      <h1 className="title">{text}</h1>
      <div className="labels">
        <div>
          <p className={category}>{category}</p>
          <p id="status" className={`${status}`}  > { status ? status: "Not Done"} </p> 
        </div>
        <button id="marked_button" className="marked_button" onClick={()=>toggle(no)} type="button">{status == "Done" ? "Undone" : "Mark as Done" }</button>
      </div>
    </div>
  </>);
}