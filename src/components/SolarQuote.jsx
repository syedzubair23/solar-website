import React from 'react'

function SolarQuote() {
  return (
    <div className="bg-[#041014] bg-gray-500 font-poppins max-h-[1100px] p-16">
        <div className='flex items-center justify-between pb-16'>
        <img
            className="h-8 w-auto"
            src="./images/szsolar-logo.svg"
            alt=""
        />
            <p className=' text-white'>Date:
            <span className='ml-2 border-b border-gray-400 font-medium'>31-12-2022</span></p>
        </div>
        <div className="flex justify-center items-center h-full">
            <table className="px-2.5 py-5 max-w-2xl text-center shadow-2xl">
                <thead className='text-white [background:linear-gradient(_101.27deg,_#31640B_0%,_#397C08_50.67%,_#78BB21_101.34%)] text-lg w-full'>
                    <tr className=''>
                        <th >Sr. No.</th>
                        <th
                            >
                            Item</th>
                        <th >Description</th>
                        <th >Unit Price</th>
                        <th >Quantity</th>
                        <th >Total</th>
                    </tr>
                </thead>

                <tbody className='bg-white text-black'>
                    <tr>
                        <td className='border-0'>1.</td>
                        <td className='border-t-0'>Solar Panels</td>
                        <td className='border-t-0'>Longi/Jinko/Canadian
                            540W
                            Mono Perc Half Cut</td>
                        <td className='border-t-0'><span>40,500</span> </td>
                        <td className='border-t-0'><span>6</span></td>
                        <td className='border-t-0'><span>2,43,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-l-0'>2.</td>
                        <td>Inverter</td>
                        <td><span>Inverex 6kw- MPPT Hybrid Solar Single phase Inverter</span></td>
                        <td><span>245,000</span></td>
                        <td>1</td>
                        <td><span>2,45,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-l-0'>3.</td>
                        <td>Battery</td>
                        <td><span>12 Volt tubular 185AH Phoenix Battery</span></td>
                        <td><span>34,000</span></td>
                        <td><span>4</span></td>
                        <td><span>1,36,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-l-0'>4.</td>
                        <td>Mounting Structure</td>
                        <td><span>L2 Structure Galvanized Iron 2mm 14 Gauge</span></td>
                        <td><span>7500</span></td>
                        <td><span>2</span></td>
                        <td><span>15,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-l-0'>5.</td>
                        <td>Flexible DC Wire + Connectors</td>
                        <td>6mm Flexible DC Cable</td>
                        <td>L/S</td>
                        <td>1</td>
                        <td><span>40,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-l-0'>6.</td>
                        <td>Miscellaneous</td>
                        <td>Circuit Breakers, Changeover Switches, Wires, PVC Pipes & other supporting item included
                        </td>
                        <td>L/S</td>
                        <td>1</td>
                        <td><span>46,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-l-0'>7.</td>
                        <td>Installation</td>
                        <td>Complete Installation</td>
                        <td>L/S</td>
                        <td>1</td>
                        <td><span>25,000/-</span></td>
                    </tr>
                    <tr>
                        <td className='border-0'>8.</td>
                        <td className='border-b-0'>Transport</td>
                        <td className='border-b-0'>--</td>
                        <td className='border-b-0'>--</td>
                        <td className='border-b-0'>-</td>
                        <td className='border-b-0'><span>5,000/-</span></td>
                    </tr>
                </tbody>

                <tfoot className='text-white font-semibold [background:linear-gradient(_101.27deg,_#31640B_0%,_#397C08_50.67%,_#78BB21_101.34%)] text-lg'>
                    <tr>
                        <td colSpan="5">
                            Net Total
                        </td>
                        <td>
                            <span className='font-bold text-[#041014]'>7,55,000/-</span>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>
    </div>
  )
}

export default SolarQuote