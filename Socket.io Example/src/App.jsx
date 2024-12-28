import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'
import { Input } from './components/input';
import { Button } from './components/button';

function App() {
  const [score, setScore] = useState({});
  const [scores, setAllScores] = useState([]);
  const socket = io('http://localhost:3000');

  function connectSocket(){
    socket.on("connection", (socket)=>{
    });

    socket.on("playerScores", (playerScores) => {
      setAllScores(playerScores);
    });
  }

  function handleInput(event){
    let {name, value} = event.target;

    setScore((prevScore) => ({...prevScore, ...{[name]: value}}));
    
  } 

  const sendScore = ()=>{
    document.querySelectorAll("#name, #score").forEach(element => {
      element.value = '';
    });

    socket.emit('message',score);

    // socket.on("update", (value) => setAllScore(value));
    socket.on("playerScores", (playerScores) => {
      setAllScores(playerScores);
    });
  }

  useEffect(()=>{
    connectSocket();
  },[setAllScores])
  return (
    <>
      <h1>React Game Play Dashboard</h1>
      <Input elementType = "text" placeholder = "Enter Your Name" elementName = "name" 
      elementId = "name" elementClassName = "input-field" handleInput = {handleInput}/>

      <Input elementType = "text" placeholder = "Enter Your Score" elementName = "score" 
      elementId = "score" elementClassName = "input-field" handleInput = {handleInput}/>

      <Button elementType = "submit" handlerFunction = {sendScore} 
      buttonText = "Submit Score" elementClassName = "send-socre"/>

    {
      scores.length > 0 ?     
        <table>
          <tr><th>Name</th><th>Score</th></tr>
            {
              scores.map(score=><tr>
                <td>{score?.name}</td>
                <td>{score?.score}</td>
              </tr>)
            }
        </table>
       : <></>
    }
    </>
  )
}

export default App
