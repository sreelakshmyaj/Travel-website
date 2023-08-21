import React from 'react'
import Deals from '../Assets/deal.png';
import Date from '../Assets/schedule.png';
import CustomerCare from '../Assets/service.png';
import { BsFire } from 'react-icons/bs';


const Features = () => {
  return (
    <div className='features-container'>
        <h4>What we serve</h4>
        <div className='feature-boxes'>
            <FeatureCard 
                title='Top Values For You' 
                icon= <BsFire />
                description="Try a variety of benefits when using our services"
            />
            <FeatureCard 
                img= { Deals }
                title="Special Deals"
                description="Highlight seasonal promotions and exclusive discount for users"
            />
            <FeatureCard 
                img = { Date }
                title="Flexible Dates"
                description="Easily adjust travel dates to explore the best options for your trip"
            />
            <FeatureCard 
                img = { CustomerCare }
                title="24/7 Customer Support"
                description="Access assistanc anytime for queries, changes or emergencies"
            />
        </div>
    </div>
  )
}

function FeatureCard(props) {
    return (
        <div className='feature-card'>
            <img src={props.img}/>
            <div>
                <h2>{props.title} {props.icon}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Features