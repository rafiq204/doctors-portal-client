import React from "react";
import { format } from 'date-fns';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({date ,  treatment, setTreatment, refetch }) => {
  const {_id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate= format(date, 'PP');

  const handleSubmit = event =>{
     event.preventDefault();
     const slot = event.target.slot.value;

     const booking ={
      treatmentId:_id,
      treatment:name,
      date:formattedDate,
      slot,
      patientName:user.displayName,
      patientEmail:user.email,
      phone:event.target.phone.value
     }
     fetch('http://localhost:5000/booking',{
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(booking),
     })
     .then(res =>res.json())
     .then(data =>{
     if(data.success){
      toast(`Your "${booking.treatment}" Appointment is set ${formattedDate} at ${slot} `)
     }
     else{
      toast.error(`Already have an Appointment on ${data.booking.date} at ${data.booking.slot}`)
     }
      refetch()
      setTreatment(null)
     })

  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-center text-secondary">You are Booking : {name}</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 justify-items-center mt-3">
               <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
               <select name="slot" className="select select-bordered w-full max-w-xs">
                   {
                    slots.map((slot,index) =><option 
                    key={index}
                     value={slot}
                    >{slot}</option>)
                   }
               </select>
               <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
               <input type="email"disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
               <input type="text" name="phone" placeholder="phone number" className="input input-bordered w-full max-w-xs" />
               <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
