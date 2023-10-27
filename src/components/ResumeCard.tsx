import { Link } from "react-router-dom";

const ResumeCard = () => {
  return (
    <>
      <Link to={"https://resumify.netlify.app/"}>
		{/* Resume Card Starts */}
		<div className="border-accent border-[0.5px] p-4 rounded-lg gap-4 flex flex-col hover:bg-neutral-800 transition-all duration-250 max-w-[200px] max-md:max-w-full cursor-pointer">
		  {/* Resume Title and Type starts */}
		  <div className="flex flex-col gap-0">
			<div className="text-base font-semibold font-Poppins">
			  Frontend Resume
			</div>
			<div className="text-xs font-normal font-Poppins">PDF</div>
		  </div>
		  {/* Resume Title and Type Ends */}
		  {/* Resume Classifications starts */}
		  <div className="flex flex-row flex-wrap gap-1">
			<div className="px-2 py-[0.5px] border-accent border-[0.5px] text-[8px] rounded-3xl">
			  Web Development
			</div>
			<div className="px-2 py-[0.5px] border-accent border-[0.5px] text-[8px] rounded-3xl">
			  Web Design
			</div>
			<div className="px-2 py-[0.5px] border-accent border-[0.5px] text-[8px] rounded-3xl">
			  React
			</div>
		  </div>
		  {/* Resume Classifications ends */}
		  {/* Resume Stat Starts */}
		  <div className="flex flex-row justify-between text-[8px] font-normal font-Poppins">
			<div>
			  <div>Last Used</div>
			  <div className="font-light">25 Oct 2023</div>
			</div>
			<div>
			  <div>Times Used</div>
			  <div className="font-light">8</div>
			</div>
		  </div>
		  {/* Resume Stat Ends */}
		</div>
		{/* Resume Card Ends */}
	  </Link>
    </>
  );
};

export default ResumeCard;
