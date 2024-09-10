import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import productsReview from './data/product-reviews.json';
import users from './data/users.json';

import RatingBar from './components/RatingBar';
import Review from './components/Review';
import Stars from './components/Stars';
import ReviewPagenation from './components/ReviewPagenation';

export type ProductReview = {
  product_id: string;
  user_id: string;
  rating: number;
  content: string | null;
  created_at: string;
}

type RatingLevel = {
  ratingLevel: string;
  percentage: number;
  color: string;
}

const usersReviewData = productsReview.map(review => {
  const user = users.find(user => user.user_id === review.user_id);

  return {
    ...review,
    userName: user!.name,
    avartarUrl: user ? user.avatar_url : null
  };
});

// const productsReview : ProductReview[]= []
const voyagerHoodieReview = usersReviewData.filter(productReview => productReview.product_id === 'voyager-hoodie');
const excellentReview: ProductReview[] = voyagerHoodieReview.filter(review => review.rating === 5);
const excellentRating: number = computeRatingLevel(excellentReview);
const goodReview = voyagerHoodieReview.filter(review => review.rating === 4);
const goodRating = computeRatingLevel(goodReview);
const averageReview = voyagerHoodieReview.filter(review => review.rating === 3);
const averageRating = computeRatingLevel(averageReview);
const belowAvgReview = voyagerHoodieReview.filter(review => review.rating === 2);
const belowAvgRating = computeRatingLevel(belowAvgReview);
const poorReview = voyagerHoodieReview.filter(review => review.rating === 1);
const poorRating = computeRatingLevel(poorReview);



const overallRating: RatingLevel[] = [
  { ratingLevel: "Excellent", percentage: excellentRating, color: "#009933" },
  { ratingLevel: "Good", percentage: goodRating, color: "#33cc33" },
  { ratingLevel: "Average", percentage: averageRating, color: "#ffd966" },
  { ratingLevel: "Below Average", percentage: belowAvgRating, color: "#cc6600" },
  { ratingLevel: "Poor", percentage: poorRating, color: "#ff0000" }
]




console.log(voyagerHoodieReview)


function computeRatingLevel(reviewArray: ProductReview[]): number {
  const numberOfRatings = reviewArray.length;
  const percentage = (numberOfRatings / productsReview.length) * 100;
  return percentage;
}

function calculateOverallRating(productsReview: ProductReview[]): number {
  const excellentReview = productsReview.filter(review => review.rating === 5).length;
  const goodReview = productsReview.filter(review => review.rating === 4).length;
  const averageReview = productsReview.filter(review => review.rating === 3).length;
  const belowAvgReview = productsReview.filter(review => review.rating === 2).length;
  const poorReview = productsReview.filter(review => review.rating === 1).length;

  const overallRating = ((5 * excellentReview) + (4 * goodReview) + (3 * averageReview) +
  (2 * belowAvgReview) + poorReview) / productsReview.length;

  return overallRating;
}

const reviewNumber = voyagerHoodieReview.length;
const overallRatingNumber = calculateOverallRating(voyagerHoodieReview);
// const overallRatingNumber = 4.;
const overallRatingString = reviewNumber === 0 ? 0 : overallRatingNumber.toFixed(1);

function App() {
  return (
    <div className='m-3'>
      <div className='d-flex'>
        <div className='flex-basis-full'>
          <h1>Overall Rating</h1>
          <div>
            <span className="fw-bold me-2">{overallRatingString}</span>
            < Stars overallRatingNumber={overallRatingNumber}/>
            <span className={reviewNumber === 0 ? 'hidden' : ''}>Based on {reviewNumber} reviews</span>
          </div>
        </div>
      </div>
      <div className='my-4'>
        {overallRating.map((review) => (<RatingBar key={review.ratingLevel} text={review.ratingLevel} percentage={review.percentage} color={review.color} />))}
      </div>
      <div className='d-flex justify-content-center mb-4'>
        <div className='flex-basis-two-third center'>
          <Button variant="light">Write a review</Button>
        </div>
      </div>
      <div>
        <ReviewPagenation usersReviewData = {usersReviewData} />

      </div>

      <div className='mt-4'>
        <div className='center'>
          <Button variant="light">Show 10 more reviews</Button>
        </div>
      </div>

    </div>
  );
}

export default App;
