import { useState } from 'react';
import './App.css';

const App = () => {

  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value);
  }




  return (
    <div className="App">
      <div className='todo_container'>
        <input onChange={onChange} value={value} type="text"></input>
        <button>Envoyer</button>
      </div>
    <div className='main_main_container'>
      <div className='main_container_received'>
          <div className='container_received'></div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
