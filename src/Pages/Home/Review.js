import React from "react";

const Review = ({ review }) => {
  console.log(review.img);
  return (
    <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content..
        </p>
        <div className=" flex items-center mt-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl ">{review.name}</h2>
            <h2 className="">{review.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
