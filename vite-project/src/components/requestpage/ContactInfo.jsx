import React from "react";
import { useState } from "react";

const ContactInfo = ({info,func}) => {

	return (
		<div className="flex flex-col md:justify-center md:items-center w-full md:w-auto rounded-lg border-purple-500 border-dashed border-4 p-3 shadow-xl shadow-purple-300">
			<p className="w-full text-xl font-semibold">Contact Info</p>
			<div className="flex flex-col md:flex-row justify-around items-center w-full my-3 gap-6">
				<div className="flex flex-col w-full">
					<label htmlFor="first_name" className="my-2 font-semibold">
						First Name
					</label>
					<input
						type="text"
						name="first_name"
						id="first_name"
						placeholder="First Name"
						className="border-[1px] border-purple-500 rounded-md px-3 py-1"
						onChange={(e) => {
							func({ ...info, first_name: e.target.value });
						}}
					/>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="last_name" className="my-2 font-semibold">
						Last Name
					</label>
					<input
						type="text"
						name="last_name"
						id="last_name"
						placeholder="Last Name"
						className="border-[1px] border-purple-500 rounded-md px-3 py-1"
						onChange={(e) => {
							info({ ...func, last_name: e.target.value });
						}}
					/>
				</div>
			</div>
			<div className="flex justify-around items-center w-full">
				<div className="flex flex-col w-full">
					<label htmlFor="email" className="my-2 font-semibold">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						className="border-[1px] border-purple-500 rounded-md px-3 py-1"
						onChange={(e) => {
							func({ ...info, email: e.target.value });
						}}
					/>
				</div>
			</div>

			<div className="flex justify-around items-center w-full my-3">
				<fieldset className="flex flex-col w-full"
					onChange={(e) => {
						func({ ...info, type: e.target.value });
					}}
				>
					<div className="grid grid-cols-2 place-items-start gap-2 sm:flex justify-around items-center w-full">
						{/* radio button  */}

						{/* mentor */}
						<div className="flex justify-center items-center">
							<input
								type="radio"
								name="type"
								id="type1"
								value="mentor"
								className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<label htmlFor="type1" className="mx-1 md:mx-3 font-semibold">
								Mentor
							</label>
						</div>

						{/* mentee */}
						<div className="flex justify-center items-center">
							<input
								type="radio"
								name="type"
								id="type1"
								value="mentee"
								className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<label htmlFor="type1" className="mx-1 md:mx-3 font-semibold">
								Mentee
							</label>
						</div>

						{/* organizations */}
						<div className="flex justify-center items-center">
							<input
								type="radio"
								name="type"
								id="type1"
								value="organisation"
								className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							/>
							<label htmlFor="type1" className="mx-1 md:mx-3 font-semibold">
								Organization
							</label>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default ContactInfo;
