import React from "react";
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from "./Review";

const Testimonial = () => {
    const reviews = [
        {
            _id:1, 
            name:'Winson herry',
            location:'California',
            review:'',
            img:people1
        },
        {
            _id:2, 
            name:'Tomas Johnson',
            location:'New york City',
            review:'',
            img:people2
        },
        {
            _id:3, 
            name:'salima Gonjila',
            location:'Hambantota',
            review:'',
            img:people3
        },
    ]


  return (
    <section className="px-12">
      <div className="flex justify-between py-20 ">
        <div>
          <h4 className="text-2xl text-primary font-bold">Testimonial</h4>
          <p className="text-4xl">What Our Patients Says</p>
        </div>
        <div>
            <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                reviews.map(review =><Review
                key={review._id}
                review = {review}
                ></Review>)
            }
      </div>
    </section>
  );
};

export default Testimonial;
