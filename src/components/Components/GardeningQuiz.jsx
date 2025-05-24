
import React, { useState } from "react";
import questions from "../Components/questionBank.json"

// const questions = [
//   {
//     question: "Which part of the plant conducts photosynthesis?",
//     options: ["Root", "Stem", "Leaf", "Flower"],
//     correctAnswer: "Leaf",
//   },
//   {
//     question: "What is the best time to water plants?",
//     options: ["Morning", "Afternoon", "Evening", "Midnight"],
//     correctAnswer: "Morning",
//   },
//   {
//     question: "Which nutrient helps plants grow leaves?",
//     options: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
//     correctAnswer: "Nitrogen",
//   },

//   {
//     question: "Which part of the plant conducts photosynthesis?",
//     options: ["Root", "Stem", "Leaf", "Flower"],
//     correctAnswer: "Leaf",
//   },
//   {
//     question: "What is the best time to water plants?",
//     options: ["Morning", "Afternoon", "Evening", "Midnight"],
//     correctAnswer: "Morning",
//   },
//   {
//     question: "Which nutrient helps plants grow leaves?",
//     options: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
//     correctAnswer: "Nitrogen",
//   },
  
//   {
//     question: "What type of soil is best for most garden plants?",
//     options: ["Clay", "Sandy", "Loamy", "Rocky"],
//     correctAnswer: "Loamy",
//   },
//   {
//     question: "Which plant is known as the 'King of Flowers'?",
//     options: ["Rose", "Lily", "Orchid", "Sunflower"],
//     correctAnswer: "Rose",
//   },
//   {
//     question: "What gas do plants absorb from the air for photosynthesis?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//     correctAnswer: "Carbon Dioxide",
//   },
//   {
//     question: "Which season is best for planting most vegetables?",
//     options: ["Winter", "Spring", "Summer", "Autumn"],
//     correctAnswer: "Spring",
//   },
//   {
//     question: "What part of the plant absorbs water and nutrients?",
//     options: ["Leaves", "Roots", "Stem", "Flower"],
//     correctAnswer: "Roots",
//   },
//   {
//     question: "Which of these is a natural pesticide?",
//     options: ["Neem oil", "Chemical spray", "Fertilizer", "Water"],
//     correctAnswer: "Neem oil",
//   },
//   {
//     question: "What is grafting in gardening?",
//     options: [
//       "Planting seeds",
//       "Cutting stems",
//       "Joining two plants together",
//       "Watering plants",
//     ],
//     correctAnswer: "Joining two plants together",
//   },
//   {
//     question: "Which of these plants is a succulent?",
//     options: ["Cactus", "Fern", "Rose", "Tulip"],
//     correctAnswer: "Cactus",
//   },
//   {
//     question: "How do plants mainly reproduce?",
//     options: ["By seeds", "By roots", "By leaves", "By flowers"],
//     correctAnswer: "By seeds",
//   },

// ];

const GardeningQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    setShowFeedback(true);


    if (option === questions[currentQ].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }


    setTimeout(() => {
      setShowFeedback(false);
      setSelected(null);
      setCurrentQ((prevQ) => prevQ + 1);
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto min-w-sm mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
        💡Test Your Gardening Knowledge💥
      </h2>

      {currentQ < questions.length ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {questions[currentQ].question}
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(opt)}
                className={`btn ${
                  selected === opt ? "btn-success" : "btn-outline"
                } ${showFeedback && selected !== opt ? "opacity-50" : ""}`}
                disabled={showFeedback}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div
              className={`text-sm font-medium mt-2 ${
                selected === questions[currentQ].correctAnswer
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {selected === questions[currentQ].correctAnswer
                ? "✅ Correct!"
                : "❌ Wrong Answer"}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-700">🎉 Quiz Finished!</h3>
          <p className="mt-2 text-gray-700">
            Your Score:{" "}
            <span className="font-bold">
              {score} / {questions.length}
            </span>
          </p>
          <button
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setSelected(null);
              setShowFeedback(false);
            }}
            className="btn btn-success mt-4"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default GardeningQuiz;

