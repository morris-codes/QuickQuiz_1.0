// import React, { useEffect, useState } from 'react';
// import { data } from '../assets/data';
// import Header from './Header';
// import '../Styles/Problems.css';
// import { Link } from 'react-router-dom';

// const Problems = ({giveData}) => {
//     let [index, setIndex] = useState(0);
//     let [selectedOptions, setSelectedOption] = useState([]);
//     let [question, setQuestion] = useState(data[index]);

//     const [timeLeft, setTimeLeft] = useState(300);
//   const [quizStarted, setQuizStarted] = useState(false); 
//   const totalQuestions = data.length;


//   useEffect(() => {
//     let timer;
//     if (quizStarted) {
//       timer = setInterval(() => {
//         setTimeLeft((prevTime) => {
//           if (prevTime <= 1) {
//             clearInterval(timer);
//             handleSubmit();
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     }
//     const handleStart = () => {
//         setQuizStarted(true)
//     }



//     return () => clearInterval(timer); // Cleanup timer
//   }, [quizStarted]);

//     //Option clicks
//     const optionClick = (option) => {
//         const retainOption = [...selectedOptions];
//             retainOption[index] = option;
//             setSelectedOption(retainOption);
//             selectedOptions = retainOption
//         };
        
    
//         //Next Button
//         const nextButton = () => {
//             if (index < data.length - 1) {
//                 setIndex(index + 1);
//                 setQuestion(data[index + 1]);
//             }
//         }
        
//         //Previous Button
//         const previousButton = () => {
//             if (index > 0) {
//                 setIndex(index - 1);
//                 setQuestion(data[index - 1]);
//             }
//         }
//         const [allAnswers, setAllAnswers] = useState([]);
    
//         useEffect(() => {
//             let temp = data.map(dat => dat.answer); 
//             setAllAnswers(temp); 
//         }, [data]); 
        
//         useEffect(() => {
//         }, [allAnswers]); 
    
        
//         let score = 0
//         //Submit Button
//         const submitButton = () => {
//             for (let t=0; t<allAnswers.length; t++){
//                 if(allAnswers[t] == selectedOptions[t]){
//                     score = score + 1
//                 }
//             }
//             console.log(score);
//             localStorage.setItem('scoreState', JSON.stringify(score))
//             giveData(score)
//         };
//   return (
//     <>
//        <div className="parent">
//             <Header/>

//             {/* QUESTION SECTION */}
//             <div className="question-1">
//                 <div className="que-1">
//                     <h6>{question.question}</h6>
//                 </div>

//             {/* OPTIONS CATEGORY */}
//             <div className="solution">
//                 <div className="option-1">
//                     <div onClick={() => optionClick(1)} 
//                         className={selectedOptions[index] === 1 ? 'selected' : ''}>
//                         <div className="option-items">
//                             <img className='option-img' src="/A.jpg" alt="" />
//                             <p>{question.option1}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="option-1">
//                     <div onClick={() => optionClick(2)} 
//                         className={selectedOptions[index] === 2 ? 'selected' : ''}>
                        
//                         <div className="option-items">
//                             <img className='option-img' src="/B.jpg" alt="" />
//                             <p>{question.option2}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="option-1">
//                     <div onClick={() => optionClick(3)} 
//                         className={selectedOptions[index] === 3 ? 'selected' : ''}>
//                         <div className="option-items">
//                             <img className='option-img' src="/C.jpg" alt="" />
//                             <p>{question.option3}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="option-1">
//                     <div onClick={() => optionClick(4)} 
//                         className={selectedOptions[index] === 4 ? 'selected' : ''}>
//                         <div className="option-items">
//                             <img className='option-img' src="/D.jpg" alt="" />
//                             <p>{question.option4}</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             </div>
//             <div className="nav">
//                 <button className='previous' onClick={previousButton} disabled={index===0}>Previous</button>
//                 {index === data.length - 1 ? (
//                   <Link className='submit-link' to='/results'><button className='submit-button' onClick={submitButton}>Submit</button></Link>       
//                 ):(
//                 <button className='next' onClick={nextButton}>Next</button>
//                 )}
//             </div>
//                   <div className='index'><i><b>{index + 1} of {data.length}</b></i></div>
//         </div>
//     </>
//   )
// }

// export default Problems


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { data } from '../assets/data';
// import Header from './Header';
// import '../Styles/Problems.css';

// const Problems = ({ giveData }) => {
//   const [index, setIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [question, setQuestion] = useState(data[index]);
  
// //  >>>>>> const [timeLeft, setTimeLeft] = useState(300);
// //   const [quizStarted, setQuizStarted] = useState(true);
// //  >>>>>> const navigate = useNavigate();

// const totalTime = 300;
// const [timer, setTimer]= useState(totalTime)

//   const totalQuestions = data.length;

//   useEffect(() => {
//     // >>>>>>let timer;
//     // if (quizStarted) {
//     //   timer = setInterval(() => {
//     //     setTimeLeft((prevTime) => {
//     //       if (prevTime <= 1) {
//     //         clearInterval(timer);
//     //         handleSubmit();
//     //         navigate('/results');
//     //         return 0;
//     //       }
//     //       return prevTime - 1;
//     //     });
//     //   }, 1000);
//     // >>>>>>}

//     if (timer > 0){

//         const interval = setInterval(() => {
//             setTimer((currentTime) => currentTime - 1);
//         }, 1000);
//         return () => clearInterval(interval);
//     } else {
//         submitButton();
//     }
// }, [timer]);


// //  >>>>>>   return () => clearInterval(timer);
// //  >>>>>> }, [quizStarted, navigate, timeLeft]);

//   const handleSubmit = () => {
//     let score = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].answer === selectedOptions[i]) {
//         score++;
//       }
//     }
//     localStorage.setItem('scoreState', JSON.stringify(score));
//     giveData(score);
//   };

//   const optionClick = (option) => {
//     const retainOption = [...selectedOptions];
//     retainOption[index] = option;
//     setSelectedOptions(retainOption);
//   };

//   const nextButton = () => {
//     if (index < data.length - 1) {
//       setIndex(index + 1);
//       setQuestion(data[index + 1]);
//     }
//   };

//   const navigate = useNavigate();
//   const [allAnswers, setAllAnswers] = useState([]);
 
//   useEffect(() => {
//       let temp = data.map(dat => dat.answer);
//       setAllAnswers(temp);
//   }, [data]);
     
//   useEffect(() => {
//   }, [allAnswers]);
 
//   //Submit Button
//   let finalScore = 0
//   const submitButton = () => {
//       for (let i = 0; i < data.length; i++) {
//           if (allAnswers[i] === selectedOptions[i]) {
//               finalScore += 1
//           }
//           setAllAnswers(finalScore);
//           navigate("/results", { state: { score: finalScore } });

//           localStorage.setItem('scoreState', JSON.stringify(finalScore))
//         //   localStorage.setItem('scoreState', JSON.stringify(score))
//           giveData(finalScore)
//       };



//   const previousButton = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//       setQuestion(data[index - 1]);
//     }
//   };

//   return (
//     <div className="parent">
//       <Header />

//       {/* TIMER PROGRESS BAR */}
//       <div className="progress-bar">
//         <div
//           className="progress"
//           style={{ width: `${(timer / totalTime) * 100}%` }}
//         ></div>
//       </div>
//       <p>Time Left: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}</p>

//       {/* QUESTION SECTION */}
//       <div className="question-1">
//         <div className="que-1">
//           <h6>{question.question}</h6>
//         </div>

//         {/* OPTIONS SECTION */}
//         <div className="solution">
//           {[1, 2, 3, 4].map((opt) => (
//             <div
//               key={opt}
//               className={`option-1 ${
//                 selectedOptions[index] === opt ? 'selected' : ''
//               }`}
//               onClick={() => optionClick(opt)}
//             >
//               <div className="option-items">
//                 <img
//                   className="option-img"
//                   src={`/public/${['A','B','C','D'][opt-1]}.jpg`}
//                   alt={`Option ${opt}`}
//                 />
//                 <p>{question[`option${opt}`]}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* NAVIGATION BUTTONS */}
//       <div className="nav">
//         <button
//           className="previous"
//           onClick={previousButton}
//           disabled={index === 0}
//         >
//           Previous
//         </button>
//         {index === data.length - 1 ? (
//           <button className="submit-button" onClick={handleSubmit}>
//             Submit
//           </button>
//         ) : (
//           <button className="next" onClick={nextButton}>
//             Next
//           </button>
//         )}
//       </div>
//       <div className="index">
//         <i>
//           <b>
//             {index + 1} of {data.length}
//           </b>
//         </i>
//       </div>
//     </div>
//   );
// };
// }
// export default Problems;




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
 
  const totalQuestions = data.length;
  const navigate = useNavigate();
  const [allAnswers, setAllAnswers] = useState([]);

  // Fetch the correct answers
  useEffect(() => {
    let temp = data.map((dat) => dat.answer);
    setAllAnswers(temp);
  }, [data]);

  // Timer logic
  useEffect(() => {
    localStorage.setItem('timerState',timer)
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
      setQuestion(data[index + 1]);
    }
  };

  const previousButton = () => {
    if (index > 0) {
      setIndex(index - 1);
      setQuestion(data[index - 1]);
    }
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

      {/* TIMER PROGRESS BAR */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(timer / totalTime) * 100}%` }}
        ></div>
      </div>
      <p>Time Left: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</p>

      {/* QUESTION SECTION */}
      <div className="question-1">
        <div className="que-1">
          <h6>{question.question}</h6>
        </div>

        {/* OPTIONS SECTION */}
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
                  src={`/public/${['A', 'B', 'C', 'D'][opt - 1]}.jpg`}
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
      <div className="index">
        <i>
          <b>{index + 1} of {data.length}</b>
        </i>
      </div>
    </div>
  );
};

export default Problems;