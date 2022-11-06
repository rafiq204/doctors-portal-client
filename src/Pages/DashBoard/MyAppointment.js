import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`,{
        method:'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
          }
         
         return res.json()
        })
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-center text-xl text-secondary font-bold mb-12">My appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                appointments.map((appoint,index )=> <tr>
                    <th>{index +1}</th>
                    <td>{appoint.patientName}</td>
                    <td>{appoint.slot}</td>
                    <td>{appoint.date}</td>
                    <td>{appoint.treatment}</td>
                  </tr>
                  )
            }
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
