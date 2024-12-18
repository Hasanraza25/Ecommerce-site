import React from 'react'

const Featured = () => {
  return (
    <div className="container mx-auto px-2 flex flex-col overflow-hidden">
    <div className="heading flex items-center mt-16 md:mt-24">
      <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
      <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
        Featured
      </h4>

      <div className="flex mt-10 md:items-center font-bold md:justify-start flex-col md:flex-row">
          <h1 className="text-4xl font-semibold">New Arrival</h1>
        </div>
    </div>

   
  </div>
  )
}

export default Featured