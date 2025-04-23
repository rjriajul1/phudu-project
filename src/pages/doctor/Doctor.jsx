import React from 'react';

const Doctor = ({singleDoctor}) => {
 
const doctor = {
  id:singleDoctor.id,
  name:singleDoctor.name,
  experience:singleDoctor.experience,
  available:singleDoctor.available,
  image:singleDoctor.photoUrl,
  fee:singleDoctor.quality.fee.amount,
  education:singleDoctor.quality.education.degree,
  specialization:singleDoctor.specialization,
  registrationNumber:singleDoctor.registrationNumber

}

const { name, experience,  image, education,  registrationNumber} = doctor;
   
    return (
        <div className=" rounded-2xl bg-base-100  shadow">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="this is a doctor photo"
            className="rounded-xl " />
        </figure>
        
        <div className="card-body ">
         <div className='text-left space-y-2'>
         <p className='font-semibold py-2 bg-blue-50 w-max rounded-2xl p-2 text-blue-500 mt-2'>experience: {experience}+ years</p>
         <h2 className="card-title text-xl">{name}</h2>
         <p>{education}</p>
         </div>
         <hr className='border-dashed border-gray-300' /> 
        <div className='text-left'>
        <div>Reg No: {registrationNumber}</div>
        </div>
          <div>
            <button className="w-full border rounded-2xl text-blue-500 p-2 mt-2 hover:bg-blue-500 hover:text-white font-bold">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Doctor;