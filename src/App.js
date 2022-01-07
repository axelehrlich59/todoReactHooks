import { useState } from 'react';
import './App.css';

const App = () => {
  const initialValue = ['Une todoList']

  const [value, setValue] = useState('')
  const [todo, setTodo] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onclickSendValue = () => {
    setTodo([...todo, value])
    setValue('')
  }



  return (
    <div className="App">
      <div className='todo_container'>
        <input onChange={onChange} value={value} type="text" className='Input'></input>
        <button onClick={onclickSendValue} className='button'>Envoyer</button>
      </div>


    <div className='main_main_container'>
      <div className='main_container_received'>
        <div className='test'>
          {todo.map((todoItem) => {
            return<> <div key={todoItem} className='container_received'>{todoItem}</div> 
            <svg className='svg' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"></path></svg>
            </>
          })}
        </div>
       
      </div>
    </div>
      
    </div>
  );
}

export default App;
