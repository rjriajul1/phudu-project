import React from "react";
import { useLoaderData, useParams } from "react-router";
import { CiWarning } from "react-icons/ci";


const DoctorDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const convertedId = parseInt(id);

  const singleDoctor = data.find((doctor) => doctor.id === convertedId);
  console.log(singleDoctor);

  const doctor = {
    id: singleDoctor.id,
    name: singleDoctor.name,
    experience: singleDoctor.experience,
    available: singleDoctor.available,
    image: singleDoctor.photoUrl,
    fee: singleDoctor.quality.fee.amount,
    education: singleDoctor.quality.education.degree,
    institution: singleDoctor.quality.education.institution,
    specialization: singleDoctor.specialization,
    registrationNumber: singleDoctor.registrationNumber,
    details: singleDoctor.details,
    availableDays: singleDoctor.availableDays,
    present:singleDoctor.available
  };

  const {
    name,
    image,
    education,
    registrationNumber,
    details,
    institution,
    availableDays,
    fee,
    present
  } = doctor || {};

  return (
    <div>
     <div className="p-4 ">
     <div className="bg-white rounded-2xl mt-6 shadow p-8 text-center">
        <h1 className="text-3xl font-bold py-3">Doctor's Profile Details</h1>
        <p>{details}</p>
      </div>
     </div>

      <div className="md:flex gap-10 my-10 p-6 bg-white shadow">
        <div className="bg-gray-200 p-6 md:flex rounded-2xl">
          <img className=" rounded-2xl object-cover  " src={image} alt="" />
        </div>
        <div className="mt-3 md:mt-0">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-gray-500 py-3">{education}</h2>
          <span className="text-gray-600">Working at</span>
          <p className="text-xl font-bold mb-3">{institution}</p>
          <hr className="border-dashed border-gray-700 " />
          <p className="text-gray-500 py-3">Reg No: {registrationNumber}</p>
          <hr className="border-dashed border-gray-700 " />
          <div className="flex gap-4 py-3 items-center">
            <p className="font-bold">Availability</p>
            {availableDays.map((day, index) => (
              <p
                key={index}
                className="bg-orange-100 text-amber-500 rounded-2xl p-1"
              >
                {day}
              </p>
            ))}
          </div>
          <p className="font-bold">
            Consultation Fee:{" "}
            <span className="text-blue-500 font-semibold">taka: {fee}</span>{" "}
            (incl,Vat)
            <span className="text-blue-500 font-thin ml-2">
              Per Consultation
            </span>
          </p>
        </div>
      </div>

      <div className="py-10 mb-4 shadow p-4">
        <h1 className="text-center font-bold text-2xl py-3">Book an Appointment</h1>
        <hr className="border-dashed border-gray-700 " />
        <div className="flex justify-between items-center py-3">
            <h1 className="font-bold text-xl">available</h1>
          <p className="text-green-500 bg-green-100 rounded-2xl p-1">
          {
                present ? 'Doctor Available Today':'Doctor Available not Today'
            }
          </p>
          
        </div>
        <hr className=" border-gray-400 " />

        <p className=" my-3 text-orange-500 bg-amber-100 rounded-2xl  p-1 flex  gap-2 items-center"><CiWarning size={30}/>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
        <button className="btn btn-info text-white font-bold text-xl text-center w-full mt-6 rounded-2xl">Book Appointment Now</button>
      </div>

    </div>
  );
};

export default DoctorDetails;
