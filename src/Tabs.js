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
        <button className="buttonDeleteTodos">Active todos</button>
      </div>
      
      <div className="containerTabsArchived">
        <button className="buttonDeleteTodos">Archived todos</button>
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