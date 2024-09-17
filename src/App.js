import './App.css';
import Joke from "./Jokes.jsx";

const JOKE = {
  question: "Why don't eggs tell jokes?",
  answer: "They'd crack each other up.",
};

const App = () => {

  
  
  return <div className=" flex h-screen justify-center items-center">

    <div className="w-full max-w-xl flex justify-center items-center">
    <Joke joke={JOKE} />
    </div>
    
  </div>;
};

export default App;
