import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            title:'Fluoride Treatment',
            description :'',
            img:fluoride
        },
        {
            _id:2,
            title:'Cavity Filling',
            description :'',
            img:cavity
        },
        {
            _id:3,
            title:'Teeth Whitening',
            description :'',
            img:whitening
        }
    ]
    return (
        <div>
            <div className='text-center my-28'>
                <h3 className='text-2xl uppercase text-primary font-bold'>Our Services</h3>
                <p className='text-4xl'>Services We Provide</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service =><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;