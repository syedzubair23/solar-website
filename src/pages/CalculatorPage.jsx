import React from 'react'
import Button from '../components/Button'

function CalculatorPage() {
  return (
    <div className='py-16 md:py-28'>
        <div className='space-y-16 sm:space-y-28'>
            <h2 className='font-fjalla_one text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide text-center'>Solar Calculator</h2>
            <div className='[background:linear-gradient(101.27deg,_#31640b,_#397c08_50%,_#78bb21)] py-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 items-start justify-items-center font-poppins px-2 sm:px-4'>
                    <div className="space-y-10 md:space-y-14">
                        <h3 className='text-3xl lg:text-4xl font-semibold text-white text-center'>Electricity Units (Monthly)</h3>
                        <div className="space-y-6">
                            <h4 className='text-xl md:text-2xl font-semibold text-[#041014] text-center'>300 Units</h4>
                            <input type="range" className='bg-[#9FE221] w-full' />
                        </div>
                    </div>
                    <div className="space-y-10 md:space-y-14">
                        <h3 className='text-3xl lg:text-4xl font-semibold text-white text-center'>System Capacity</h3>
                        <h4 className='text-xl md:text-2xl font-semibold text-[#041014] text-center'>3KW Solar System</h4>
                    </div>
            </div>
            <form action="" className="max-w-xl md:max-w-3xl mx-auto font-poppins">
                <h3 className='text-3xl font-semibold text-white text-center mb-10'>Get Estimated Quote</h3>
              <div className="space-y-6">
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <Button styles={"w-full mt-10"} button_text={"Generate bill"} />
            </form>
        </div>
    </div>
  )
}

export default CalculatorPage

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
  