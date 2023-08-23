import React, {useState, useEffect} from 'react';
import TouristImg from '../Assets/tourist.jpg';

const Experience = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

  return (
    <div className='experience-container'>
        <div className='e-img'>
            <img src={TouristImg} alt='tourist' />
        </div>
        <div className='e-txt'>
            <h4>Our experience</h4>
            <h1>With Our Experience We Will Serve You</h1>
            <p>Embark on a world of unforgettable experiences with our curated travel offerings. From pristine beaches to bustling cityscapes, we specialize in crafting journeys that leave you with cherished memories.</p>

            <div className='counter'>
                <div><span className='c1'>{value1}</span>Years Experience</div>
                <div><span className='c2'>{value2}</span>Destination Collaboration</div>
                <div><span className='c3'>{value3}</span>Happy Customers</div>
            </div>
        </div>
    </div>
  )
}

export default Experience