import React from "react";

const locations = [
  {
    id: "multan",
    name: "Multan",
    address: "3211 Gulgasht Colony Multan, ML 66000",
  },
  {
    id: "karachi",
    name: "Karachi",
    address: "1122 Bharia Town Karachi, KH 12300",
  },
  {
    id: "lahore",
    name: "Lahore",
    address: "1311 Gulberg Town Lahore, LH 36000",
  },
  {
    id: "peshawar",
    name: "Peshawar",
    address: "9212 Namak Mandi Peshawar, PW 9100",
  },
];

function Location() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 font-poppins px-4 sm:px-6 lg:px-8">
        <h3 className="text-[#9FE221] text-[32px] font-semibold leading-tight">Locations</h3>
        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-16">
          {locations.map((location) => (
            <div key={location.id} className='mb-8 md:mb-12'>
              <h4 className="text-xl font-medium text-[#9FE221]">
                {location.name}
              </h4>
              <p className="mt-2 text-base text-[#ADBABF] max-w-[18ch] leading-relaxed">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
