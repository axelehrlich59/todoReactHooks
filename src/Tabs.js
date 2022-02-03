import react from "react";
import Task from './Task';
import DeleteAllTodo from './DeleteAllTodo';

const Tabs = ({
  todoList,
  showDeleteCheckedTodoButton,
  handleCheckbox,
  deleteCheckedTodos,
  completeTodo,
  deleteTodoItem,
}) => {


  return (
    <>
    <div className="containerAllTabs">
      <div className="containerTabsActive">
        <div className="Tabs">Active todos</div>
        <hr className='hrTab'></hr>
      </div>
      
      <div className="containerTabsArchived">
        <div className="Tabs">Archived todos</div>
        <hr className='hrTab'></hr>
      </div>
    </div>

    {showDeleteCheckedTodoButton && <DeleteAllTodo 
      deleteCheckedTodos={deleteCheckedTodos}
    />}
      {todoList.map((todoItem, index) => {
        return ( 
          <> 
            <Task 
              className='task'
              key={index} 
              todoItem={todoItem}
              index={index}
              completeTodo={completeTodo}
              deleteTodoItem={deleteTodoItem}
              handleCheckbox={handleCheckbox}
            >
            </Task> 
          </>
        )
      })}
    </>
  )
}

export default Tabs