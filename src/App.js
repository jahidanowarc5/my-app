import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  
  return (
    <div className="App">
   {/* <Counter></Counter> */}
    <ExternalUsers></ExternalUsers>

      
    </div>
  );
}

function Users (props){
  return (
    <div style={{border: '2px solid blue', margin: '20px'}}>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  )

}
function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  

  
  return (
    <div>
      <h2>Name:</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(33);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
    
    
  
  
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}








export default App;
