type RatingBarProps = {
  text: string,
  percentage: number
};

export default function RatingBar({text, percentage}: RatingBarProps) {
  return(
    <>
      <div className='d-flex align-items-end'>
        <div className='flex-basis-two-third'>
          {text}
        </div>
        <div className='flex-basis-two-third'>
          <div className="progress mb-1" style={{ height: '10px' }}>
            <div className="progress-bar" style={{ width: `${percentage}%` }} role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>

        <div className='flex-basis-third ps-4'>
          {percentage}%
        </div>
      </div>
    </>
  )
}
