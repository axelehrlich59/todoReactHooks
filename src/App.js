import { useEffect, useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Task from './Task';



const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodos] = useState([
  {
    text: "Aller faire les courses pour mamie",
    isCompleted: false
  },
  {
    text: "Tondre le gazon",
    isCompleted: true
  },
  {
    text: "Rendre visite à mes parents",
    isCompleted: false
  },
])
  const [todoCompleted, setTodoCompleted] = useState(false)

  const onChange = (event) => {
    const inputValue = event.target.value
    setInputValue(inputValue)

    const maxCharacters = 80
    if(inputValue.length > maxCharacters) {
      const inputLimited = inputValue.substr(0, maxCharacters)
      setInputValue(inputLimited)
    }
  }

  const handleKeyPress = (event) => {
    const inputNotEmpty = event.target.value !== ""
    if (event.key === "Enter" && inputNotEmpty) {
      const newTodo = [...todoList, {text: inputValue, isCompleted: false}]
      setTodos(newTodo)
      setInputValue('')
    }
  }

  const completeTodo = (index) => {
    const newTodo = [...todoList]
    let previousCompletedValue = newTodo[index].isCompleted
    newTodo[index].isCompleted = !previousCompletedValue
    setTodos(newTodo)
  }

  const deleteTodoItem = (index) => {
    const todoItemToDelete = [...todoList]
    todoItemToDelete.splice(index, 1)
    setTodos(todoItemToDelete)
  } 

  return (
    <div className="App">
      <div className='todo_container'>
        <input placeholder='Enter a todo...' onChange={onChange} onKeyPress={handleKeyPress} value={inputValue} type="text" className='Input'></input>
      </div>
      <div className='main_main_container'>
      <div className='main_container_received'>
        <div className='test'>
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
