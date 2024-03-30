import { Link } from "react-router-dom";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import EventDetails from "./EventDetails";
import OtherDetails from "./OtherDetails";

const RequestEvent = () => {
	
	const [contactinfo, setContactInfo] = useState({
		first_name: "",
		last_name: "",
		email: "",
		type: "",
	});

	const [eventDetails, setEventDetails] = useState({
		event_name: "",
		category: "",
		start_time: "",
		end_time: "",
	});

	const [otherDetails, setOtherDetails] = useState({
		event_description: "",
		host_of_the_event: "",
		target_audience: "",
		event_sponsors: "",
		event_link: "",
	});

	/* Update function to send details to mongo or any database */
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(contactinfo);
		console.log(eventDetails);
		console.log(otherDetails);
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<Link
				to="/"
				className="text-2xl flex items-center gap-3 font-semibold hover:text-[#8800ff] text-[#8200ff] w-full ps-14 mt-5 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="w-5">
					<path
						fill="#8836ff"
						d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
					/>
				</svg>
				Events Page
			</Link>
			<div className="flex flex-col lg:flex-row justify-around ms-0 md:ms-20 gap-10 p-5 px-5 w-full">
				<div className="flex flex-col gap-10 w-full lg:w-1/2 pe-0 md:pe-20 lg:pe-0">
					<ContactInfo info={contactinfo} func={setContactInfo}/>
					<EventDetails info={eventDetails} func={setEventDetails}/>
				</div>
				<div className="w-full lg:w-1/2 flex justify-center">
					<OtherDetails info={otherDetails} func={setOtherDetails}/>
				</div>
			</div>
			{/* <button className="bg-[#8836FF] w-36 text-white font-semibold text-lg py-2 px-5 rounded-md m-5 md:ms-24 md:my-5">
				Submit
			</button> */}

			<div className="flex flex-row justify-start items-center">
				<a
					href="#_"
					className="relative inline-block px-4 py-2 font-medium group mb-8"
					onClick={handleSubmit}
					>
					<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#8800ff] group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
					<span className="absolute inset-0 w-full h-full bg-white border-2 border-[#8800ff] group-hover:bg-[#8800ff] rounded-lg"></span>
					<span className="relative text-black group-hover:text-white flex items-center justify-center">
						Submit
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
	);
};

export default RequestEvent;
