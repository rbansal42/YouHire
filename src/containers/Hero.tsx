import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<div className="flex flex-row items-center justify-center align-middle bg-no-repeat bg-cover bg-hero-pattern h-96">
				<div className=" flex flex-row justify-between w-[50%]">
					{/* <Link to="/Login">
						<button className="px-4 py-2 transition-all duration-300 border rounded shadow bg-primary hover:bg-gray-100 text-background border-accent font-Poppins">
							Corporate Login
						</button>
					</Link> */}
					<Link to={"/Login"}>
						<button className="px-4 py-2 transition-all duration-300 border rounded shadow bg-primary hover:bg-gray-100 text-background border-accent font-Poppins">
							Institute Login
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
