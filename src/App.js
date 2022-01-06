import { useState } from 'react';
import './App.css';

const App = () => {

  const initialValue = []
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onclickSendValue = () => {
    value.push(initialValue)
  }



  return (
    <div className="App">
      <div className='todo_container'>
        <input onChange={onChange} value={value} type="text"></input>
        <button onClick={onclickSendValue}>Envoyer</button>
      </div>


    <div className='main_main_container'>
      <div className='main_container_received'>
        {todo.map((todoItem) => {
          return <div key={todoItem} className='container_received'>{todoItem}</div>
        })

        }
          
      </div>
    </div>
      
    </div>
  );
}

export default App;
