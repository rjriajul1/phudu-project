import React, { useEffect, useState } from "react";
import { getItemfromLocalSTR } from "../../utilies/LocalStorag";
import { useLoaderData } from "react-router";
import BookMarkDoctor from "../bookMarkDoctor/BookMarkDoctor";
import { removeFromLocalSTR } from "../../utilies/LocalStorag";
import EmptyMessage from "../../components/emptyMessage/EmptyMessage";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MyBookings = () => {
  // all doctors data load
  const data = useLoaderData();

  const [doctors, setDoctors] = useState([]);

  // localStorage all item
  useEffect(() => {
    const stordItem = getItemfromLocalSTR();
    const convertedId = stordItem.map((id) => parseInt(id));
    const doctors = data.filter((doctor) => convertedId.includes(doctor.id));
    setDoctors(doctors);
  }, [data]);

  // cancel korba from ui and localstorage
  const handleCancelAppointment = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
    removeFromLocalSTR(id);
  };

  // empty message
  if (doctors.length < 1) return <EmptyMessage />;

  // data procing 
  const doctorsData = doctors.map((singleDoctor) => {
    const doctor = {
      fee: singleDoctor.quality.fee.amount,
      name: singleDoctor.name,
    };
    return doctor;
  });
  
  return (
    <div>
      <div className="flex justify-center py-8">
        <BarChart width={500} height={500} data={doctorsData}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fee" fill="red" label={{ position: "top" }} />
        </BarChart>
      </div>

      <div className="bg-gray-200 ">
        <h1 className="text-2xl font-bold text-center py-3">
          My Today Appointment
        </h1>
        <p className="text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>

        <div className="p-4">
          {doctors.map((doctor) => (
            <BookMarkDoctor
              handleCancelAppointment={handleCancelAppointment}
              key={doctor.id}
              doctor={doctor}
            ></BookMarkDoctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
