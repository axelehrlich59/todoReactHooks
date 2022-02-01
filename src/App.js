import { useEffect, useState } from 'react';
//import {uid} from 'react-uid';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Task from './Task';



const App = () => {

  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])
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

  const deleteTodoItem = (index) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  } 

  return (
    <div className="App">
      <div className='todo_container'>
        <input placeholder='Enter a todo...' onChange={onChange} onKeyPress={handleKeyPress} value={value} type="text" className='Input'></input>
      </div>
      <div className='main_main_container'>
      <div className='main_container_received'>
        <div className='test'>
          {todo.map((todoItem, index) => {
            return ( 
              <> 
                <Task 
                  className='task'
                  key={index} 
                  todoItem={todoItem}
                  index={index}
                  completeTodo={completeTodo}
                  deleteTodoItem={deleteTodoItem}
                >
                </Task> 
              </>
            )
          })}
        </div>
      </div>
    </div>
        
      
    </div>
  );
}

export default App;
