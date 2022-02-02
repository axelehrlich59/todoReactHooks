import react from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({
  todoItem, 
  index,
  deleteTodoItem,
  completeTodo,
  handleCheckbox
}) => {
  return (
    <>
      <div
        className="containerToDoList"
        style={{ textDecoration: todoItem.isCompleted ? "line-through" : "" }}
      >
        <input className='checkbox' onChange={handleCheckbox} type="checkbox"></input>
          <div className="containerTodoItem">
            <div className='todoItem' onClick={() => completeTodo(index)}>{todoItem.text}</div>
          </div>
        <FontAwesomeIcon onClick={() => deleteTodoItem(index)} icon={faTrash} className='trash-icon'/>
      </div>
      <hr className='hr'></hr>
    </>
  );
}

export default Task