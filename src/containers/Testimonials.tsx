import { college1, college2, college3, college4 } from "../assets/images";

const Testimonials = () => {
	return (
		<>
			<div className="flex flex-col align-middle items-center py-8">
				<div className="font-Poppins font-semibold text-2xl">
					Testimonials
				</div>
				<div className="flex flex-row justify-around w-full px-32 py-4 gap-2 border-b-[0.5px] border-accent">
					<img
						src={college1}
						alt="college partner 1"
						width={100}
						className="object-contain"
					/>
					<img
						src={college2}
						alt="college partner 2"
						width={100}
						className="object-contain"
					/>
					<img
						src={college3}
						alt="college partner 3"
						// height={50}
						width={100}
						className="object-contain h-[75px]"
					/>
					<img
						src={college4}
						alt="college partner 3"
						width={100}
						className="object-contain"
					/>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
