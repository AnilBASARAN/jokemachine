import { useState } from "react";

const Jokes = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { joke } = props;

  return (
    <div className="flex flex-col items-center">
      {joke ? (
        <>
          <div className="text-2xl">{joke.question}</div>
          {showAnswer ? (
            <div className="h-6 m-4 text-blue-300 text-xl">{joke.answer}</div>
          ) : (
            <div className="m-4 h-6"></div>
          )}
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-green-400 rounded-lg p-2 m-2 w-36"
          >
            {showAnswer ? "Hide Answer" : "Reveal Answer"}
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Jokes;
