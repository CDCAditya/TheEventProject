import { useEffect, useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

export default function EventDetails({ info, func }) {
	const [start_time, setStartTime] = useState("10:00");
	const [end_time, setEndTime] = useState("10:00");

	useEffect(() => {
		func({ ...info, start_time: start_time, end_time: end_time });
	}, [start_time, end_time]);

	return (
		<>
			<div className="flex flex-col justify-center items-center rounded-lg border-purple-500 border-dashed border-4 p-3 shadow-xl shadow-purple-300">
				<p className="w-full text-xl font-semibold">Event Detail</p>
				<div className="flex flex-col md:flex-row justify-around items-center w-full my-3 gap-6">
					<div className="flex flex-col w-full">
						<label htmlFor="event_name" className="my-2 font-semibold w-full">
							Event Name
						</label>
						<input
							type="text"
							name="event_name"
							id="event_name"
							placeholder="Event Name"
							className="border-[1px] border-purple-500 rounded-md px-3 py-1"
							onChange={(e) => {
								func({ ...info, event_name: e.target.value });
							}}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="category" className="my-2 font-semibold w-full">
							Category
						</label>
						<input
							type="text"
							name="category"
							id="category"
							placeholder="Category"
							className="border-[1px] border-purple-500 rounded-md px-3 py-1"
							onChange={(e) => {
								func({ ...info, category: e.target.value });
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-around items-center w-full gap-3 my-5">
					<div className="flex flex-col w-full">
						<p className="my-2 font-semibold w-full">Event Start Time</p>
						<TimePicker
							onChange={setStartTime}
							value={start_time}
							className="py-1"
						/>
					</div>
					<div className="flex flex-col w-full">
						<p className="my-2 font-semibold w-full">Event End Time</p>
						<TimePicker
							onChange={setEndTime}
							value={end_time}
							className="py-1"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
