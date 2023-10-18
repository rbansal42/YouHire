const Collabs = () => {
	return (
		<>
			<div className="flex flex-col align-middle items-center py-8 border-b-[0.5px] border-accent">
				<div className="font-Poppins font-semibold text-2xl">
					Our Industry Partners
				</div>
				<div className="flex flex-row justify-around w-full px-32 py-4 gap-2">
					<img
						src="assets/images/industry1.webp"
						alt="college partner 1"
						width={100}
						className="object-contain"
					/>
					<img
						src="assets/images/industry2.png"
						alt="college partner 2"
						width={100}
						className="object-contain h-[75px] bg-white px-3"
					/>
					<img
						src="assets/images/industry3.webp"
						alt="college partner 3"
						// height={50}
						width={100}
						className="object-contain h-[75px]"
					/>
					<img
						src="assets/images/industry4.webp"
						alt="college partner 3"
						width={100}
						className="object-contain"
					/>
				</div>
			</div>
		</>
	);
};

export default Collabs;
