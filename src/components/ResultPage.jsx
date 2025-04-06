import { useLocation } from 'react-router-dom';
import './ResultPage.css';

function ResultPage() {
  const location = useLocation();
  const { finalScore } = location.state || {};

  return (
    <div className="result-page">
      <h1 className="result-title">Your Result</h1>
      <p className="result-text">Your final score is: {finalScore}</p>
      <div className="result-container">
        {/* Add any additional result items or components here */}
      </div>
    </div>
  );
}

export default ResultPage;