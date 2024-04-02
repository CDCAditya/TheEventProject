import React, { useEffect, useState } from 'react';
// import data from "../../constants/data.json";
import CardInterface from './CardInterface';
import { Link } from 'react-router-dom';
import SideNav from '../core/SideNavbar';

const CardContainer = () => {
  //useEffect to setData from api request
  const [data, setData] = useState(null);
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState("upcoming");
  const [selectedCategory, setSelectedCategory] = useState("Spirituality");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/events/get');
                const jsonData = await response.json();
                setData(jsonData);
                setEvents(jsonData.filter(event => event.category === "Spirituality"));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Call the async function immediately

    }, []);

    useEffect(() => {
      if (data) {
        setEvents(data.filter(event => event.upcoming === 'true'));
      }
    }, [data]);


  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setEvents(data.filter(event => event.category === newCategory));
  };

  const handleUpcomingEvent = () => {
    setEvents(data.filter(event => event.upcoming === 'True'));
    setActiveEvent("upcoming");
  };

  const handlePrerecordedEvent = () => {
    setEvents(data.filter(event => event['preRecorded'] === 'True'));
    setActiveEvent("pre-recorded");
  };

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <SideNav onCategoryChange={handleCategoryChange} />
        <div className='flex flex-col'>
          <div className='flex w-full md:w-auto justify-around md:justify-start items-center md:gap-5 mx-3'>
            <div onClick={handleUpcomingEvent} className={activeEvent === 'upcoming' ? 'text-md sm:text-xl text-center font-semibold  hover:text-customColor' : 'text-md sm:text-xl text-center font-semibold  hover:text-customColor'}>Upcoming Events</div>

            <div onClick={handlePrerecordedEvent} className={activeEvent === 'pre-recorded' ? 'text-md sm:text-xl text-center font-semibold  hover:text-customColor' : 'text-md sm:text-xl text-center font-semibold  hover:text-customColor'}>Pre-recorded Events</div>

            <Link to="/requestEvent" className="text-md sm:text-xl text-center font-semibold hover:text-customColor">Request Event</Link>

            {/* <div onClick={handle} className={activeEvent === 'request' ? 'text-xl transition-all duration-400 border-b-4 border-customColor cursor-pointer hover:text-customColor' : 'text-xl transition-all duration-400 border-b-4 border-side cursor-pointer hover:text-customColor'}><a>Request Event</a></div> 
      
                <div  onClick={handle} className={activeEvent === 'schedule' ? 'text-xl transition-all duration-400 border-b-4 border-customColor cursor-pointer hover:text-customColor' : 'text-xl transition-all duration-400 border-b-4 border-side cursor-pointer hover:text-customColor'}><a >Schedule Event</a></div> */}
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => {
                return (
                  <CardInterface key={index} event={item} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
