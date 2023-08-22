import React, {useState, useEffect} from 'react'
import { MdTravelExplore } from 'react-icons/md';
import travelDestinations from '../destination-data';
import { CiLocationOn } from 'react-icons/ci';

const Destinations = () => {  
  return (
    <div className='destination-container'>
        <h4>Top Destinations</h4>
        <h1>Explore Top Destinations <span className='explore-icon'><MdTravelExplore /></span></h1>
        <div className='destination-boxes'>
            {travelDestinations.map((destination) => (
                <TourCard 
                    image = {destination.image}
                    title = {destination.destination}
                    country = {destination.country}
                    description = {destination.description}
                    price = {destination.price}
                />
            ))}
        </div>
    </div>
  )
}

const TourCard = (props) => {

    return (
        <div className='tour-card'>
            <div className='tour-img'>
                <img src={props.image} alt='image' />
            </div>
            <h4>{props.title}</h4>
            <p className='country'><CiLocationOn />{props.country}</p>
            <hr/>
            <p className='desc'><i>{props.description}</i></p>
            <p className='cost'>{props.price}</p>
        </div>
    )
}

export default Destinations