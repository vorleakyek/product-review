import Review from "./Review"

import type { ProductReview } from '../App';

export type Users = {
  userName: string;
  avartarUrl: string | null;
}

export type ReviewDataProps = {
  usersReviewData: Array<ProductReview & Users>;
}

export default function ReviewPagenation({ usersReviewData }: ReviewDataProps ) {
  return (
    <>
      {usersReviewData.slice(0,10).map(review => <Review key={review.userName + Math.random()} usersReviewData={review} />)}

    </>
  )
}
