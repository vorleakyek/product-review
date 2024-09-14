import { BsChatDots } from "react-icons/bs";

export default function EmptyReview() {
  return(
    <>
      <div className='d-flex'>
        <div className="center my-5 row justify-content-center">
          <div className="flex-basis-full ">
            <div className="d-flex justify-content-center">
              <div className="bubble">
                <BsChatDots />
              </div>
            </div>
            <div>
              <p className="fw-bold mb-1 mt-3">No review yet!</p>
              <p>Be the first to review this product</p>
            </div>
      </div>



        </div>
      </div>
    </>
  )
}
