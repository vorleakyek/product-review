import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

type RatingBarProps = {
  text: string;
  percentage: number;
  color: string;
  setData: any;
  setPageSize: any;
  pageSize: number;
};

export default function RatingBar({ text, percentage, color, setData, setPageSize, pageSize}: RatingBarProps) {
  const [isClicked, setIsClicked] = useState(false);


  function updateTextAndPageSize(text: string ,pageSize:number) {
    setData(text);
    setPageSize(pageSize);
    setIsClicked(true);
  }
  return (
    <>
      <div className='d-flex align-items-end'>
        <div className='flex-basis-two-third'>
          {text}
        </div>
        <div className='flex-basis-two-third' onClick={()=>updateTextAndPageSize(text,pageSize)}>
          <div className={`progress mb-1 ${isClicked ? "border-active" : ""}`}>
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
