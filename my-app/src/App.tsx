import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import productsReview from './data/product-reviews.json';

import RatingBar from './components/RatingBar';

const overallRating = [
  { RatingDescription: "Excellent", percentage: 57 },
  { RatingDescription: "Good", percentage: 25 },
  { RatingDescription: "Average", percentage: 15 },
  { RatingDescription: "Below Average", percentage: 5 },
  { RatingDescription: "Poor", percentage: 20 }
]

function App() {
  return (
    <div className='m-3'>
      <div className='d-flex'>
        <div className='flex-basis-full'>
          <h1>Overall Rating</h1>
          <div className=''>
            <span className="fw-bold me-4">0</span>
            {['star1', 'star2', 'star3', 'star4', 'star5'].map((star) => <BsStarFill className='me-2 gray mb-1' key={star} />)}
          </div>
        </div>
      </div>
      <div className='my-4'>
        {overallRating.map((review) => (<RatingBar key={review.RatingDescription} text={review.RatingDescription} percentage={review.percentage} />))}



      </div>
    </div>
  );
}

export default App;
