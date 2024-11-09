import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;

}

const emp:Employee = {name:'viswa',id:12};

console.log(emp)



function App() {
  return (
    <div className="App">
      <h1>{JSON.stringify(emp)}</h1>
    </div>
  );
}

export default App;
