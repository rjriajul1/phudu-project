import React from 'react';

const BookMarkDoctor = ({doctor}) => {

    const doctors = {
        id: doctor.id,
        name: doctor.name,
        experience: doctor.experience,
        available: doctor.available,
        image: doctor.photoUrl,
        fee: doctor.quality.fee.amount,
        education: doctor.quality.education.degree,
        institution: doctor.quality.education.institution,
        specialization: doctor.specialization,
        registrationNumber: doctor.registrationNumber,
        details: doctor.details,
        availableDays: doctor.availableDays,
        present:doctor.available
      };
    const {name, fee,education} = doctors || {};

    
    return (
        <div className='rounded-2xl mt-6 py-5 bg-white'>
            <div className='flex justify-between items-center p-7 '>
               <div>
               <h1 className='font-bold text-xl'>{name}</h1>
               <p className='text-gray-500 py-2'>{education }</p>
               </div>
               <div>
                <p className='text-gray-500'>AppointmentFee: {fee} Taka + Vat</p>
               </div>
              
            </div>
         <div className='p-7'>
         <button className='w-full border border-red-500 rounded-2xl text-red-500 font-semibold p-2'>cancel Appointment</button>
         </div>
        </div>
    );
};

export default BookMarkDoctor;