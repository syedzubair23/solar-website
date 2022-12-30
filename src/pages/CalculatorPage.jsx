import React from "react";
import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";

const solar_panel_company = [
    { id: 1, item: 'CanadianSolar' },
    { id: 2, item: 'Longi' },
    { id: 3, item: 'JASolar' },
    { id: 4, item: 'Inverex' },
    { id: 5, item: 'JinkoSolar' },
  ]
  
  const solar_technology = [
    { id: 1, item: 'Mono-Perc Halfcut' },
    { id: 2, item: 'PolyCrystalline' },
  ]
  
  const panel_watt_rating = [
      { id: 1, item: '370 watt' },
      { id: 2, item: '535 watt' },
      { id: 3, item: '540 watt' },
      { id: 4, item: '545 watt' },
      { id: 5, item: '600 watt' },
      { id: 6, item: '665 watt' },
    ]
  
  const number_of_panels = [...Array(99).keys()]
  
  const inverter_company = [
      { id: 1, item: 'Inverex' },
      { id: 2, item: 'SolarMax' },
      { id: 3, item: 'MaxPower' },
      { id: 4, item: 'Fronius' },
      { id: 5, item: 'Solis' },
      { id: 6, item: 'Tesla' },
      { id: 7, item: 'ABB' },
    ]
  
  const inverter_kw_rating = [
      { id: 1, item: '1.5kw' },
      { id: 2, item: '3.2kw' },
      { id: 3, item: '5kw' },
      { id: 4, item: '5.6kw' },
      { id: 5, item: '6kw' },
      { id: 6, item: '8kw' },
      { id: 7, item: '10kw' },
    ]
  
  const mounting_structure = [
      { id: 1, item: 'L2 Galvanized Iron' },
      { id: 2, item: 'L3 Galvanized Iron' },
      { id: 3, item: 'Custom Iron Structure' },
    ]  
  
  const battery_type = [
      { id: 1, item: 'Tubular' },
      { id: 2, item: 'Lead-Acid' },
      { id: 3, item: 'Lithium' },
    ]  
  
  const battery_company = [
      { id: 1, item: 'Phoenix' },
      { id: 2, item: 'Osaka' },
      { id: 3, item: 'Inverex' },
    ]  
  
  const battery_ampere = [
      { id: 1, item: '185AH' },
      { id: 2, item: '200AH' },
    ]  


function CalculatorPage() {
  return (
    <>
    <div className="max-w-7xl mx-auto py-16 md:py-28 mb-16 md:mb-28 bg-[url('/images/calculatorpage-bgimage.png')] bg-no-repeat bg-cover">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 mb-16">
        <img
          src="./images/calculatorpage-bgimage.png"
          className="absolute top-0 max-w-7xl mx-auto z-0 object-contain"
          alt=""
        /> */}
        <div className="space-y-16 sm:space-y-28">
          <h2 className="px-4 sm:px-6 lg:px-8 font-fjalla_one text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide text-center">
            Solar Calculator
          </h2>
          <div className="px-6 sm:px-10 lg:px-12 [background:linear-gradient(101.27deg,_#31640b,_#397c08_50%,_#78bb21)] py-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 items-start justify-items-center font-poppins">
              <div className="space-y-10 md:space-y-14">
                <h3 className="text-3xl lg:text-4xl font-semibold text-white text-center">
                  Electricity Units (Monthly)
                </h3>
                <div className="space-y-6">
                  <h4 className="text-xl md:text-2xl font-semibold text-[#041014] text-center">
                    300 Units
                  </h4>
                  <input type="range" className="bg-[#9FE221] w-full" />
                </div>
              </div>
              <div className="space-y-10 md:space-y-14">
                <h3 className="text-3xl lg:text-4xl font-semibold text-white text-center">
                  System Capacity
                </h3>
                <h4 className="text-xl md:text-2xl font-semibold text-[#041014] text-center">
                  3KW Solar System
                </h4>
              </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <form
              action=""
              className="max-w-xl md:max-w-3xl mx-auto font-poppins"
            >
              <h3 className="text-3xl font-semibold text-white text-center mb-10">
                Get Estimated Quote
              </h3>
              <div className="space-y-6">
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Solar Company
                    </label>
                    <CustomSelect number={false} option={solar_panel_company} />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Solar Technology
                    </label>
                    <CustomSelect number={false} option={solar_technology} />
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Solar Plate Watts Rating
                    </label>
                    <CustomSelect number={false} option={panel_watt_rating} />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Number of Solar Plates
                    </label>
                    <CustomSelect number={true} option={number_of_panels} />
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Solar Inverter Company
                    </label>
                    <CustomSelect number={false} option={inverter_company} />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Inverter KW Rating
                    </label>
                    <CustomSelect number={false} option={inverter_kw_rating} />
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Mounting Structure
                    </label>
                    <CustomSelect number={false} option={mounting_structure} />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Battery Type
                    </label>
                    <CustomSelect number={false} option={battery_type} />
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Battery Company
                    </label>
                    <CustomSelect number={false} option={battery_company} />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Battery Ampere
                    </label>
                    <CustomSelect number={false} option={battery_ampere} />
                  </div>
                </div>
              </div>
              <Button styles={"w-full mt-10 text-white"} button_text={"Generate Quote"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorPage;

// const CalculatorFrom = () => {
//     return (
//       <div className="relative bg-white w-full h-[1428px] overflow-hidden text-center text-lg text-white font-poppins">
//         <img
//           className="absolute top-[0px] left-[0px] w-[1440px] h-[1428px] object-cover"
//           alt=""
//           src="../image-3@2x.png"
//         />
//         <div className="absolute top-[324px] left-[0px] [background:linear-gradient(101.27deg,_#31640b,_#397c08_50%,_#78bb21)] w-[1441px] h-[357px]" />
//         <div className="absolute top-[813px] left-[324px] w-[792px] h-[477px]">
//           <div className="absolute top-[421px] left-[0px] rounded-[6px] [background:linear-gradient(90deg,_#31640b,_rgba(159,_226,_33,_0.6))] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] w-[792px] flex flex-row p-[16px_24px] box-border items-start justify-start">
//             <div className="flex-1 relative font-semibold inline-block">
//               Generate Bill
//             </div>
//           </div>
//           <div className="absolute top-[0px] left-[0px] w-[792px] h-[378px] text-left text-gray-1100">
//             <div className="absolute top-[0px] left-[0px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[82px] left-[0px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[164px] left-[0px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[246px] left-[0px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[328px] left-[0px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[0px] left-[413px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[82px] left-[413px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[164px] left-[413px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[246px] left-[413px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[328px] left-[413px] rounded-[8px] bg-gray-1000 w-[379px] h-[50px]" />
//             <div className="absolute top-[13px] left-[22px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[95px] left-[22px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[177px] left-[22px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[259px] left-[22px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[341px] left-[22px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[13px] left-[435px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[95px] left-[435px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[177px] left-[435px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[259px] left-[435px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//             <div className="absolute top-[341px] left-[435px] leading-[24px] inline-block w-[357px] h-[24px]">
//               First name
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[411px] left-[121px] w-[1200px] flex flex-row items-start justify-start gap-[64px] text-3xl">
//           <div className="flex-1 flex flex-col items-center justify-center gap-[56px]">
//             <h3 className="m-[0] relative text-[inherit] leading-[45px] font-semibold font-inherit inline-block">
//               Electricity Units (Monthly)
//             </h3>
//             <div className="self-stretch flex flex-col items-center justify-center gap-[24px] text-2xl text-gray-700">
//               <h4 className="m-[0] self-stretch relative text-[inherit] font-semibold font-inherit inline-block">
//                 300 Units
//               </h4>
//               <input
//                 className="[border:none] font-medium font-inter text-[12px] bg-[transparent] self-stretch relative rounded-[8px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] h-[24px] shrink-0"
//                 type="text"
//                 placeholder="25%"
//               />
//             </div>
//           </div>
//           <div className="flex-1 flex flex-col items-center justify-center gap-[56px]">
//             <h3 className="m-[0] self-stretch relative text-[inherit] leading-[45px] font-semibold font-inherit inline-block">
//               System Capcity
//             </h3>
//             <h4 className="m-[0] self-stretch relative text-2xl font-semibold font-inherit text-gray-700 inline-block">
//               3KW Solar System
//             </h4>
//           </div>
//         </div>
//         <div className="absolute top-[102px] left-[372px] text-4xl tracking-[0.07em] font-fjalla-one text-left inline-block">
//           Solar Calculator
//         </div>
//         <div className="absolute top-[314.93px] left-[787.15px] rounded-[200px] [background:linear-gradient(90deg,_#1a2980,_#26d0ce)] [filter:blur(650px)] w-[441.27px] h-[549.98px] [transform:_rotate(-150deg)] [transform-origin:0_0]" />
//       </div>
//     );
//   };

//   export default CalculatorFrom;
