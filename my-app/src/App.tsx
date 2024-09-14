import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import productsReview from './data/product-reviews.json';
import users from './data/users.json';
import Button from 'react-bootstrap/Button';


import RatingBar from './components/RatingBar';
import Stars from './components/Stars';
import ReviewPagenation from './components/ReviewPagenation';
import EmptyReview from './components/EmptyReview';

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

const voyagerHoodieReview = usersReviewData.filter(productReview => productReview.product_id === 'voyager-hoodie');
const excellentReview = voyagerHoodieReview.filter(review => review.rating === 5);
const excellentRating = computeRatingLevel(excellentReview);
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
const overallRatingString = reviewNumber === 0 ? 0 : overallRatingNumber.toFixed(1);

function App() {

  const [data, setData] = useState('all');
  const [pageSize, setPageSize] = useState(10);
  const [activeBar, setActiveBar] = useState<string | null>(null);

  const filteredUsersData = function (ratingDescription: string) {
    if (ratingDescription === 'Excellent') {
      return excellentReview
    } else if (ratingDescription === 'Good') {
      return goodReview
    } else if (ratingDescription === 'Average') {
      return averageReview
    } else if (ratingDescription === 'Below Average') {
      return belowAvgReview
    } else if (ratingDescription === 'Poor') {
      return poorReview
    } else if (ratingDescription === 'all') {
      return voyagerHoodieReview
    }
  }

  function resetDataAndActiveBar() {
    setActiveBar(null);
    setData('all');
    setPageSize(10);
  }

  return (
    <div className='container'>
      <div className='row flex-basis-full'>
        <div className='flex-basis-full flex-basis-half'>
          <h1>Overall Rating</h1>
          <div>
            <span className="fw-bold me-2">{overallRatingString}</span>
            <Stars overallRatingNumber={overallRatingNumber} />
            <span className={reviewNumber === 0 ? 'hidden' : ''}>Based on {reviewNumber} reviews</span>
          </div>
          <div className='my-4'>
            {overallRating.map((review) => (<RatingBar key={review.ratingLevel} text={review.ratingLevel} percentage={review.percentage} color={review.color} setData={setData} pageSize={10} setPageSize={setPageSize} isActive={activeBar === review.ratingLevel} setActiveBar={setActiveBar} />))}
          </div>
          <div className={activeBar ? '' : 'hidden'}>
            <Button variant="warning filter" size="sm" onClick={resetDataAndActiveBar}>
              Clear filter
            </Button>
          </div>
        </div>
        <div className='flex-basis-full flex-basis-half'>
          {
            filteredUsersData(data)!.length === 0 ? <EmptyReview /> : <ReviewPagenation usersReviewData={filteredUsersData(data)!} pageSize={pageSize} setPageSize={setPageSize} />
          }
        </div>
      </div>


    </div>
  );
}

export default App;
