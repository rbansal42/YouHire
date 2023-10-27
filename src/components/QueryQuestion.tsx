import { student1 } from "../assets/images";

const QueryQuestion = () => {
  return (
    <>
      <div
        className={`flex flex-col px-4 py-4 border-accent border-[0.5px] rounded-lg text-text font-Poppins h-fit w-full gap-4 cursor-default hover:shadow hover:shadow-slate-500 transition-all duration-200 hover:bg-neutral-800 `}>
        <div className="flex flex-row-reverse gap-2 align-middle">
          <div className="flex flex-col flex-1">
            <div
              className="text-lg font-semibold font-Poppins"
              id="positionTitle">
              Rahul Bansal
            </div>
            <div
              id="companyName"
              className="text-sm font-Poppins">
              Sushant University
            </div>
          </div>
          <div className="flex-[0.1] align-middle flex rounded-full">
            <img
              src={student1}
              alt="Company Logo"
              className="object-contain w-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex flex-row flex-wrap gap-1 text-xs text-text">
            <span>B.Tech Computer Science</span> {" • "}
            <span>Final Year</span> {" • "}
            <span>Full Stack Web Developer</span>
          </div>
          <div
            id="technologiesNeeded"
            className="flex flex-row flex-wrap gap-1 text-xs text-accent">
            <span
              id="technology"
              className="px-[6px] text-white rounded-md bg-secondary">
              HTML
            </span>
            <span
              id="technology"
              className="px-[6px] text-white rounded-md bg-secondary">
              CSS
            </span>
            <span
              id="technology"
              className="px-[6px] text-white rounded-md bg-secondary">
              Javascript
            </span>
            <span
              id="technology"
              className="px-[6px] text-white rounded-md bg-secondary">
              React
            </span>
            <span
              id="technology"
              className="px-[6px] text-white rounded-md bg-secondary">
              MongoDB
            </span>
          </div>
          <div className="w-full p-2 mt-8 text-xs leading-tight tracking-tight rounded-lg text-text bg-secondary">
            <h1 className="text-lg font-semibold font-Poppins">Question</h1>
			<p>
              {
                "Sint nostrud consequat officia sint proident minim adipisicing ad velit ullamco. Ipsum minim sint non. Ipsum minim sint non. Ipsum minim sint non."
              }
            </p>
            <p>
              {
                "Sint nostrud consequat officia sint proident minim adipisicing ad velit ullamco. Ipsum minim sint non."
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryQuestion;
