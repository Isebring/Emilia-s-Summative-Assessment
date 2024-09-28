import { Button, Container } from "@mantine/core";
import React, { useState } from "react";

interface TriviaProps {
  trivia: {
    question: string;
    options: string[];
    correct_answer: string;
  }[];
}

const Trivia: React.FC<TriviaProps> = ({ trivia }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(trivia.length).fill("")
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (index: number, answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (selectedAnswers.includes("")) {
      alert("Please answer all questions before submitting.");
    } else {
      setShowResults(true);
    }
  };

  return (
    <Container>
      <div className="trivia-section">
        <h2>Trivia Quiz</h2>
        {trivia.map((q, index) => (
          <div key={index} className="trivia-question">
            <p>
              <strong>{q.question}</strong>
            </p>
            <div className="trivia-options">
              {q.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  className={`trivia-option ${
                    selectedAnswers[index] === option ? "selected" : ""
                  } ${
                    showResults && option === q.correct_answer
                      ? "correct"
                      : showResults &&
                        selectedAnswers[index] === option &&
                        option !== q.correct_answer
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => handleAnswerSelect(index, option)}
                  disabled={showResults}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        {!showResults && (
          <Button
            style={{ fontFamily: "var(--mantine-font-family" }}
            variant="outline"
            color="dark"
            radius="xl"
            size="md"
            onClick={handleSubmit}
          >
            Submit Answers
          </Button>
        )}
        {showResults && (
          <div className="trivia-results">
            <h3>Results</h3>
            <ul>
              {trivia.map((q, index) => (
                <li key={index}>
                  <strong>{q.question}</strong> - Your answer:{" "}
                  {selectedAnswers[index] || "None"} - Correct answer:{" "}
                  {q.correct_answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Trivia;
