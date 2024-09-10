import Stars from './Stars';
import type { ProductReview } from '../App';

export type Users = {
  userName: string;
  avartarUrl: string | null;
}

export type ReviewDataProps = {
  usersReviewData : ProductReview & Users;
}

export default function Review({ usersReviewData }: ReviewDataProps) {

  const date = new Date(usersReviewData.created_at);
  const formatedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  function getInitials(name: string) {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part: string) => part[0]).join('');
    return initials.toLocaleUpperCase();
  }


  const profileImage = usersReviewData.avartarUrl ? <img className="avatar" src={ usersReviewData.avartarUrl} alt='avatar' /> :
    <div className='avatar flex'><p>{getInitials(usersReviewData.userName)}</p></div>

  return (
    <>
      <div className="d-flex">
        <div className="flex-basis-one-fifth">
          <div className='avatar-container'>
            {profileImage}

          </div>

        </div>
        <div className="flex-basis-half">
          <p className='mb-1 fw-bold fs-6'>{usersReviewData.userName}</p>
          <Stars overallRatingNumber={usersReviewData.rating} />
        </div>
        <div>
          <p className='fs-7'>{formatedDate}</p>
        </div>
      </div>
      <div className='my-2'>
        <p>{usersReviewData.content}</p>
      </div>
    </>
  )
}
