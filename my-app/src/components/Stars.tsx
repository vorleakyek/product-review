import { BsStarFill } from 'react-icons/bs';

type starsProps = {
  overallRatingNumber: number;
}
export default function Stars ({overallRatingNumber}: starsProps) {
  return(
    <>
      {['star1', 'star2', 'star3', 'star4', 'star5'].map((star, index) =>
        <BsStarFill
          className={`me-2 ${index <= overallRatingNumber - 1 ? 'yellow' : 'gray'} mb-1`}
          key={star}
        />)}
    </>
  )
}
