import React from "react";

const Service = ({ service , setTreatment}) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl text-center ">
      <div className="card-body ">
        <h2 className="text-xl font-bold text-secondary ">{name}</h2>
        <p>
            {
                slots.length >0 
                ? <span>{slots[0]}</span>
                : <span className="text-red-500">Try another date.</span>
            }
        </p>
        <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} Available</p>
        <div className="card-actions justify-center">
           <label
            htmlFor="booking-modal"
            disabled ={slots.length === 0} 
            onClick={()=>setTreatment(service)}
            className="btn btn-sm btn-secondary bg-gradient-to-r from-primary to-secondary uppercase text-white">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
