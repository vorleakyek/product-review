import Review from "./Review"
import {useState} from "react"
import Button from 'react-bootstrap/Button';
import type { ProductReview } from '../App';

export type Users = {
  userName: string;
  avartarUrl: string | null;
}

export type ReviewDataProps = {
  usersReviewData: Array<ProductReview & Users>;
  pageSize: number;
  setPageSize: any;
}

export default function ReviewPagenation({ usersReviewData, pageSize, setPageSize }: ReviewDataProps ) {

  const sortByLatest = usersReviewData.sort((a,b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  let hiddenReview = sortByLatest.length - pageSize;

  function showMoreReview() {
    if (sortByLatest.length - pageSize >= 10) {
      setPageSize(pageSize + 10);
    } else if (sortByLatest.length - pageSize < 10 && sortByLatest.length - pageSize > 0) {
      setPageSize(sortByLatest.length);
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center mb-4'>
        <div className='flex-basis-two-third center hidden'>
          <Button variant="light">Write a review</Button>
        </div>
      </div>
      {sortByLatest.slice(0,pageSize).map(review => <Review key={review.userName + Math.random()} usersReviewData={review} />)}
      <div className='mt-4'>
        <div className={`center ${pageSize >= sortByLatest.length || pageSize < 0 ? 'hidden' : ''}`}>
          <Button variant="light" onClick={showMoreReview}>Show {hiddenReview >= 10 ? 10 : hiddenReview} more reviews</Button>
        </div>
      </div>
    </>
  )
}
