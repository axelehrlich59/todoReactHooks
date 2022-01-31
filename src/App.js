import { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const initialValue = []

  const [value, setValue] = useState('')
  const [todo, setTodo] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setTodo([...todo, value])
      setValue('')
    }
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
            <div key={todoItem} className='container_received'>
              {todoItem}
              <FontAwesomeIcon icon={faTrash} className='trash-icon' onClick={() => deleteTodoItem(index)} />
            </div> 
              <hr className='hr'></hr>
            </>
          })}
        </div>
       
      </div>
    </div>
      
    </div>
  );
}

export default App;
