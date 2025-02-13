import React, { useEffect, useState } from 'react';
import '../Styles/Results.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Results = ({score}) => {

    const [savedScore, setSavedScore] = useState(null)

    useEffect(() => {
        const scoreState = localStorage.getItem('scoreState')
        if(scoreState){
            console.log(scoreState);
            setSavedScore(scoreState)
        }
        else if(score){
        console.log(score);
        }
    }, [])
  return (
    <div className="parent">
        <Header/> 
        <div className="p-result">
            <div className="result-msg">
                <p><i>Quiz completed</i></p>
                <h6>You scored....</h6>
            </div>
            <div className="score">
                <h4>{savedScore? savedScore : score}</h4>
                <p>out of 20</p>
            </div>
            <div className="r-nav">
                <Link to='/problems'> <button>Restart</button> </Link>
            </div>
        </div>
    </div>
  )
}

export default Results