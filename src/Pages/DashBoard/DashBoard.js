import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <h2 className="text-3xl text-purple-400">Dashboard</h2>
       <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Appointment</Link>
          </li>
          <li>
            <Link to='/dashboard/myReviews'>My Reviews</Link>
          </li>
          <li>
            <Link to='/dashboard/myHistory'>My History</Link>
          </li>
          <li>
           {admin && <Link to='/dashboard/users'>All Users</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
