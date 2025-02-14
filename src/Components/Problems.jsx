import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../assets/data';  // 100 questions
import Header from './Header';
import '../Styles/Problems.css';

const Problems = ({ giveData }) => {
  const totalTime = 300;
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timer, setTimer] = useState(totalTime);
  const [allAnswers, setAllAnswers] = useState([]);

  // Randomize questions and set the first 20
  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(data);
    setQuestions(shuffledQuestions.slice(0, 20)); // Only take the first 20 questions
  }, []);

  // Randomize the data array
  const shuffleQuestions = (questions) => {
    return questions
      .map((question) => ({ question, rand: Math.random() })) // Add a random value for shuffling
      .sort((a, b) => a.rand - b.rand) // Sort based on the random value
      .map(({ question }) => question); // Return shuffled questions
  };

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((currentTime) => currentTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      submitButton();
    }
  }, [timer]);

  // Handle option selection
  const optionClick = (option) => {
    const retainOption = [...selectedOptions];
    retainOption[index] = option;
    setSelectedOptions(retainOption);
  };

  const nextButton = () => {
    if (index < 19) {  // Only allow next until the 19th question
      setIndex(index + 1);
    }
  };

  const previousButton = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handlePageClick = (pageIndex) => {
    setIndex(pageIndex);
  };

  const handleSubmit = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer === selectedOptions[i]) {
        score++;
      }
    }
    localStorage.setItem('scoreState', JSON.stringify(score));
    giveData(score);
    navigate('/results');
  };

  const submitButton = () => {
    let finalScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer === selectedOptions[i]) {
        finalScore++;
      }
    }
    localStorage.setItem('scoreState', JSON.stringify(finalScore));
    giveData(finalScore);
    navigate('/results', { state: { score: finalScore } });
  };

  return (
    <div className="parent">
      <Header />

      {/* TIMER */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(timer / totalTime) * 100}%` }}
        ></div>
      </div>
      <p>
        Time Left: {Math.floor(timer / 60)}:
        {String(timer % 60).padStart(2, '0')}
      </p>

      {/* QUESTION */}
      <div className="question-1">
        <div className="que-1">
          <h6>{questions[index]?.question}</h6>
        </div>

        {/* OPTIONS */}
        <div className="solution">
          {[1, 2, 3, 4].map((opt) => (
            <div
              key={opt}
              className={`option-1 ${selectedOptions[index] === opt ? 'selected' : ''}`}
              onClick={() => optionClick(opt)}
            >
              <div className="option-items">
                <img
                  className="option-img"
                  src={`/${['A', 'B', 'C', 'D'][opt - 1]}.jpg`}
                  alt={`Option ${opt}`}
                />
                <p>{questions[index]?.[`option${opt}`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="nav">
        <button
          className="previous"
          onClick={previousButton}
          disabled={index === 0}
        >
          Previous
        </button>
        {index === 19 ? (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="next" onClick={nextButton}>
            Next
          </button>
        )}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        {questions.map((_, i) => (
          <button
            key={i}
            className={`page-button ${i === index ? 'active' : ''}`}
            onClick={() => handlePageClick(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Problems;
