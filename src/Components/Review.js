import React from 'react'
import Carousel from 'react-elastic-carousel';
import reviewdata from '../review';

const Review = () => {
  return (
    <div className='review-container'>
      <h4>Reviews</h4>
      <h1>We Care About Our Customers Experience Too</h1>
      <div className='reviews'>
        <Carousel>
          {reviewdata.map((item) => (
            <ReviewCard
              image = {item.image}
              review = {item.review}
              name = {item.name}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

const ReviewCard = (props) => {
  return (
    <div className='review-card'>
      <div className="profile">
        <img src={props.image} width={100} height={100} alt='profile'/>
      </div>
      <div className='text'>
        <p>
          {props.review}
        </p>
        <div className="line"></div>
        <h5>{props.name}</h5>
      </div>
    </div>
  )
}

export default Review