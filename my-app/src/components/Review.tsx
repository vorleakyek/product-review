import Stars from './Stars';

export default function Review () {
  return (
    <>
      <div className="d-flex">
        <div className="flex-basis-one-fifth">
          <img className="avatar" src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/kimberly-mastrangelo.jpg" alt="" />
        </div>
        <div className="flex-basis-half">
          <p className='mb-1 fw-bold fs-6'>Lilia McKnight</p>
          <Stars overallRatingNumber={3} />
        </div>
        <div>
          <p className='fs-7'>March 11, 2024</p>
        </div>
      </div>
      <div className='my-2'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
    </>
  )
}
