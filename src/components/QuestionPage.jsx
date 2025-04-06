import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { questions, options, imagePaths } from '../data/questionsData';
import './QuestionPage.css';

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  const questionIndex = parseInt(id, 10) - 1;
  const question = questions[questionIndex];
  const [option1, option2] = options[questionIndex] || [];
  const [image1, image2] = imagePaths[questionIndex] || [];

  const handleOptionClick = (selectedOption) => {
    const nextQuestionId = questionIndex + 2;
    const updatedScore = score + (selectedOption === 'option1' ? 1 : 2);
    setScore(updatedScore);

    if (nextQuestionId <= questions.length) {
      navigate(`/question/${nextQuestionId}`);
    } else {
      navigate('/result', { state: { finalScore: updatedScore } }); // Pass score to result page
    }
  };

  return (
    <div className="question-page">
      <h1 className="question-title">Question {id}</h1>
      <p className="question-text">{question}</p>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('option1')}>
          <img src={image1} alt={option1} className="option-image" />
          <button className="option-button">{option1}</button>
        </div>
        <div className="option" onClick={() => handleOptionClick('option2')}>
          <img src={image2} alt={option2} className="option-image" />
          <button className="option-button">{option2}</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;