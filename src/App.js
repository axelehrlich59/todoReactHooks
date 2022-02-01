import { useEffect, useState } from 'react';
//import {uid} from 'react-uid';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Task = ({
  todoItem, 
  index,
  deleteTodoItem,
  completeTodo
}) => {
  return (
    <>
      <div
          className="container_received"
          style={{ textDecoration: todoItem.isCompleted ? "line-through" : "" }}
      >
        <input type="checkbox"></input>
          <div className='todoItem' onClick={() => completeTodo(index)}>{todoItem.text}</div>
        <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
      </div>
      <hr className='hr'></hr>
    </>
  );
}

const App = () => {

  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([{
    text: "Allez-y, essayez !",
    id: 4,
    isCompleted: false
  }])
  const [todoCompleted, setTodoCompleted] = useState(false)

  const onChange = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)

    const maxCharacters = 80
    if(inputValue.length > maxCharacters) {
      const inputLimited = inputValue.substr(0, maxCharacters)
      setValue(inputLimited)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const newTodo = [...todo, {text: value, isCompleted: false}]
      setTodo(newTodo)
      setValue('')
    }
  }

  const completeTodo = (index) => {
    const newTodo = [...todo]
    newTodo[index].isCompleted = todoCompleted 
    setTodoCompleted(!todoCompleted)
    setTodo(newTodo)
  }

  const deleteTodoItem = (todoIndex) => {
    const newTodos = todo.filter((_, index) => index !== todoIndex);
    setTodo(newTodos)
  } 

  return (
    <div className="App">
      <div className='todo_container'>
        <input placeholder='Enter a text...' onChange={onChange} onKeyPress={handleKeyPress} value={value} type="text" className='Input'></input>
      </div>
      <div className='main_main_container'>
      <div className='main_container_received'>
        <div className='test'>
          {todo.map((todoItem, index) => {
            return  <> 
              <Task 
                className='task'
                key={index} 
                todoItem={todoItem}
                index={index}
                completeTodo={completeTodo}
              >
              </Task> 
            </>
          })}
        </div>
      </div>
    </div>
        
      
    </div>
  );
}

export default App;
