import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import ButtonPrimary from '../Shared/Button/ButtonPrimary';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
       <section  className='flex justify-center items-center' style={{background:`url(${appointment})`}}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 p-4'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white mt-5'>Make an appointment Today</h2>
                <p className='text-slate-300 mt-3 mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <Link to='/appointment'><ButtonPrimary>APPOINTMENT</ButtonPrimary></Link> 
            </div>

       </section>
    );
};

export default MakeAppointment;