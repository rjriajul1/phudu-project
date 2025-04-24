import React, { useEffect, useState } from "react";
import { getItemfromLocalSTR } from "../../utilies/LocalStorag";
import { useLoaderData } from "react-router";
import BookMarkDoctor from "../bookMarkDoctor/BookMarkDoctor";

const MyBookings = () => {
  const data = useLoaderData();
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const stordItem = getItemfromLocalSTR();
    const convertedId = stordItem.map((id) => parseInt(id));
    const doctors = data.filter((doctor) => convertedId.includes(doctor.id));
    setDoctors(doctors);
  }, [data]);
  return (
    <div>
      <div className="bg-gray-200 ">
        <h1 className="text-2xl font-bold text-center py-3">My Today Appointment</h1>
        <p className="text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

       <div className="p-4">
       {doctors.map((doctor) => (
          <BookMarkDoctor key={doctor.id} doctor={doctor}></BookMarkDoctor>
        ))}
       </div>
      </div>
    </div>
  );
};

export default MyBookings;
