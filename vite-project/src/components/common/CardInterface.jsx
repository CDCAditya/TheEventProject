// CardIndividual.jsx

import React from 'react';

const CardInterface = ({event}) => {
  console.log(event);
  return (
    <div key={event.eventId} className="border-2 rounded-lg p-2 flex flex-col justify-between items-center m-3 ">
      <div className="">
        <img
          className="w-full rounded-lg md:h-40 "
          src={event.image}
          alt=""
        />
      </div>
      <div className="w-full p-2">
        <div className="text-xl text-center font-semibold">
          {event.title}
        </div>
        <br />
        <div className="flex justify-between text-sm text-gray-600 ">
          <div className='flex flex-col md:flex-row gap-1'>
            <p className=''>{event.DateAndTime.substr(0,10)}</p>
            <p>{event.DateAndTime.substr(11,13)}</p>
          </div>
          <div className="flex items-center">
            <img src="/pin.png" alt="" className="h-4" />
            <span className="ml-1 font-semibold text-md">{event.location}</span>
          </div>
        </div>
        <div className="mt-2 text-gray-600 font-medium">{event.mentorName}</div>
        <div className="flex flex-row justify-between items-center mt-2 gap-3">
          <div>{event.category}</div>
          <div className='w-auto'>
            {/* <button className="border-3 border-transparent bg-customColor hover:bg-orange-400 w-full rounded-md transition-all duration-500 text-white px-4 py-2">
              {event.Button}
            </button> */}
            <a
									href="#_"
									className="relative inline-block px-4 py-2 font-medium group">
									<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#8800ff] group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
									<span className="absolute inset-0 w-full h-full bg-white border-2 border-[#8800ff] group-hover:bg-white rounded-lg"></span>
									<span className="relative text-black group-hover:text-black flex items-center justify-center">
                  <span className='w-full'>{event.Button}</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6 ml-2 transform rotate-90"
											viewBox="0 0 24 24">
											<path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
										</svg>
									</span>
								</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInterface;

/* hover:bg-white hover:text-customColor */


