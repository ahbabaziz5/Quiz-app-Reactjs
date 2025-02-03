import React,{ useState } from "react";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const[interator,setIterator] = useState(0)
  const[score,setScore] = useState(0)

  const questions = [
    // English Questions
    {
      question: "Which is the correct spelling?",
      options: ["Recieve", "Receive", "Reciev", "Receeve"],
      correct: "Receive",
    },
    {
      question: "What is the synonym of 'Happy'?",
      options: ["Sad", "Angry", "Joyful", "Lazy"],
      correct: "Joyful",
    },
    {
      question: "Identify the noun in this sentence: 'The cat is sleeping on the mat.'",
      options: ["Sleeping", "Mat", "On", "Is"],
      correct: "Mat",
    },
    {
      question: "What is the opposite of 'Brave'?",
      options: ["Fearless", "Cowardly", "Strong", "Bold"],
      correct: "Cowardly",
    },
    {
      question: "Which of the following is a verb?",
      options: ["Run", "Table", "Happy", "Beautiful"],
      correct: "Run",
    },
  
    // Mathematics Questions
    {
      question: "What is 15 + 8?",
      options: ["20", "22", "23", "24"],
      correct: "23",
    },
    {
      question: "If a triangle has angles 60° and 90°, what is the third angle?",
      options: ["30°", "45°", "60°", "90°"],
      correct: "30°",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: "8",
    },
    {
      question: "Solve: 5 × (3 + 2) = ?",
      options: ["15", "20", "25", "30"],
      correct: "25",
    },
    {
      question: "What is the value of π (pi) approximately?",
      options: ["2.14", "3.14", "4.14", "5.14"],
      correct: "3.14",
    },
  
    // Computer Science Questions
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Power Unit",
        "Control Processing Unit",
        "Central Performance Unit",
      ],
      correct: "Central Processing Unit",
    },
    {
      question: "Which one is an output device?",
      options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
      correct: "Monitor",
    },
    {
      question: "Which of these is a programming language?",
      options: ["HTML", "Java", "Windows", "Google"],
      correct: "Java",
    },
    {
      question: "What is the main function of RAM in a computer?",
      options: [
        "Store data permanently",
        "Execute programs",
        "Control peripheral devices",
        "Provide temporary memory for processing",
      ],
      correct: "Provide temporary memory for processing",
    },
    {
      question: "Which key is used to enter a new line in a text document?",
      options: ["Spacebar", "Enter", "Shift", "Backspace"],
      correct: "Enter",
    },
  ];

  const handleOptionChange = (option) => {
    console.log(option)
    setSelectedOption(option);
    if (option === questions[interator].correct ) {
      setTimeout(() => {
        setIterator((prev) => prev + 1);
        setScore((prev) => prev + 5)
        // Move to next question after a short delay
        setSelectedOption(null); // Reset selected option
      }, 1000); // 1-second delay before moving to the next question
    }
  };
  console.log(score)

  const handleQuestions = () => {
    console.log(interator)
    if (interator < questions.length-1) {
      setIterator(interator + 1);
    //   setSelectedOption(null); // Reset selection for next question
    }
  }
const handlePrev = ()=>{
    if (interator >= 0) {
        setIterator(interator -1);
      //   setSelectedOption(null); // Reset selection for next question
      }
}

// const handleOut =()=>{

// }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 sm:p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-700">Quiz Time!</h1>
        <p className="text-center text-gray-500 mb-4">Test your knowledge</p>
<span className="float-end"> {interator+1}/{questions.length}</span>
        {/* Question */}
        <div className="mb-4">
          <p className="text-lg font-semibold">{questions[interator].question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
        {questions[interator].options.map((option, index) => (
  <label
    key={index}
    className={`block border-2 rounded-lg px-4 py-2 cursor-pointer transition-all flex items-center gap-2 ${
      selectedOption === option
        ? option === questions[interator].correct
          ? "border-green-500 bg-green-100" // Correct answer styling
          : "border-red-500 bg-red-100" // Wrong answer styling
        : "border-gray-300 hover:bg-gray-100"
    }`}
  >
    <input
      type="radio"
      name="quiz"
      value={option}
      className="hidden"
      onChange={() => handleOptionChange(option)}
    />
    {option} 
    {selectedOption === option && option === questions[interator].correct && (
      <span className="text-green-600 font-bold">✅</span> // Show checkmark if correct
    )}
  </label>
))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-end">
            {/* {
                interator > 0 ?
                <button
               className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            
               onClick={handlePrev}
             >
               Previous
             </button>:
                <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
                disabled
                onClick={handlePrev}
              >
                Previous
              </button>
               
            } */}
          


          
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" onClick={handleQuestions}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
