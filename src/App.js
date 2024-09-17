import './App.css';
import {useState} from "react";
import Joke from "./Jokes.jsx";
import clsx from "clsx";


const App = () => {

  const [joke,setJoke] = useState(null);

  const fetchJoke=()=>{
    fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
    .then((response)=>response.json())
    .then((data)=>setJoke(data))
  }
  
  return <div className=" flex h-screen justify-center items-center">

    <div className="w-full max-w-xl flex flex-col justify-center items-center">
    <Joke joke={joke} />

      <button
        onClick={()=>fetchJoke()}
        className={clsx("bg-blue-400 rounded-lg p-2 w-36",joke ? "text-black" : "text-white m-24" )}>New Joke</button>
    </div>
    
  </div>;
};

export default App;
