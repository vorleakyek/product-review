import ProgressBar from 'react-bootstrap/ProgressBar';

type RatingBarProps = {
  text: string;
  percentage: number;
  color: string;
};

export default function RatingBar({ text, percentage, color }: RatingBarProps) {
  return (
    <>
      <div className='d-flex align-items-end'>
        <div className='flex-basis-two-third'>
          {text}
        </div>
        <div className='flex-basis-two-third'>
          <div className="progress mb-1" style={{ height: '10px' }}>
            <div className="progress-bar" style={{ width: `${percentage}%`, backgroundColor: percentage ? color : '' }} role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>

        <div className='flex-basis-third ps-4'>
          {percentage ? Math.round(percentage) : 0}%
        </div>
      </div>
    </>
  )
}
