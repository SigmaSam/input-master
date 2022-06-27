import React from 'react'
import '../styles/App.css';
import Inputs from './Inputs';
import styling from '../assets/styling.json';

function App() {
  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  const inputs = styling.map(item =>{
   return (
    <Inputs 
      id={item.id}
      value={value}
      props={item}
      key={item.id}
      handleChange={handleChange}
    />)
  })

  return (
    <div className="App">
      <div className="inputs-tittle">
        <h1>Inputs</h1>
        </div>
      <div className="inputs-container">
        {inputs}
      </div>
    </div>
  );
}

export default App;
