import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../assets/data';
import Header from './Header';
import '../Styles/Problems.css';

const Problems = ({ giveData }) => {
  const [index, setIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [question, setQuestion] = useState(data[index]);
  const totalTime = 300;
  const [timer, setTimer] = useState(totalTime);

  const navigate = useNavigate();
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    setQuestion(data[index]);
  }, [index]);

  // Fetch correct answers
  useEffect(() => {
    let temp = data.map((dat) => dat.answer);
    setAllAnswers(temp);
  }, []);

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

  const optionClick = (option) => {
    const retainOption = [...selectedOptions];
    retainOption[index] = option;
    setSelectedOptions(retainOption);
  };

  const nextButton = () => {
    if (index < data.length - 1) {
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
    for (let i = 0; i < data.length; i++) {
      if (data[i].answer === selectedOptions[i]) {
        score++;
      }
    }
    localStorage.setItem('scoreState', JSON.stringify(score));
    giveData(score);
    navigate('/results');
  };

  const submitButton = () => {
    let finalScore = 0;
    for (let i = 0; i < data.length; i++) {
      if (allAnswers[i] === selectedOptions[i]) {
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
          <h6>{question.question}</h6>
        </div>

        {/* OPTIONS */}
        <div className="solution">
          {[1, 2, 3, 4].map((opt) => (
            <div
              key={opt}
              className={`option-1 ${selectedOptions[index] === opt ? 'selected' : ''
                }`}
              onClick={() => optionClick(opt)}
            >
              <div className="option-items">
                <img
                  className="option-img"
                  src={`/${['A', 'B', 'C', 'D'][opt - 1]}.jpg`}
                  alt={`Option ${opt}`}
                />
                <p>{question[`option${opt}`]}</p>
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
        {index === data.length - 1 ? (
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
        {data.map((_, i) => (
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
