import React from "react";

const Hero = () => {
	return (
		<>
			<div className="flex flex-row bg-hero-pattern h-96 bg-cover bg-no-repeat justify-center align-middle items-center">
				<div className=" flex flex-row justify-between w-[50%]">
					<button className="bg-primary hover:bg-gray-100 text-background py-2 px-4 border border-accent rounded shadow font-Poppins">
						Corporate Login
					</button>
					<button className="bg-primary hover:bg-gray-100 text-background py-2 px-4 border border-accent rounded shadow font-Poppins">
						Institute Login
					</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
