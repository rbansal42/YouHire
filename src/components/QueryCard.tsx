import { Link } from "react-router-dom";
import { company1 } from "../assets/images";

const QueryCard = () => {
  return (
    <>
      <Link to={"/query"}>
        <div className="flex flex-col gap-2 p-4 border-accent border-[0.5px] rounded-lg hover:shadow hover:shadow-slate-500 transition-all duration-200 hover:bg-neutral-800">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col flex-1 gap-1">
              <div className="font-semibold text-l font-Poppins text-text">
                Full Stack Web Developer
              </div>
              <div className="text-sm font-normal font-Poppins">Google</div>
            </div>
            <div className="flex-[0.1] align-middle flex rounded-full">
              <img
                src={company1}
                alt="Company Logo"
                className="object-contain w-full rounded-full"
              />
            </div>
          </div>
          <div className="p-2 text-xs leading-snug tracking-tight rounded-md bg-secondary">
            <p>
				Sint nostrud consequat officia sint proident minim adipisicing ad
				velit ullamco. Ipsum minim sint non.
			</p>
            <p>
				Sint nostrud consequat officia sint proident minim adipisicing ad
				velit ullamco. Ipsum minim sint non.
			</p>
            <p>
				Sint nostrud consequat officia sint proident minim adipisicing ad
				velit ullamco. Ipsum minim sint non.
			</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default QueryCard;
