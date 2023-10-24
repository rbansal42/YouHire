import React from "react";
import { Link } from "react-router-dom";

const ListingStudent = () => {
  return (
    <Link to={"/listing"}>
      <div className="flex flex-col px-4 py-4 border-accent border-[0.5px] rounded-lg text-text font-Poppins h-fit w-full gap-4 cursor-pointer hover:shadow hover:shadow-slate-500 transition-all duration-200">
        <div className="flex flex-row gap-2 align-middle">
          <div className="flex flex-col flex-1">
            <div
              className="text-lg font-semibold font-Poppins"
              id="positionTitle">
              Full Stack Web Developer
            </div>
            <div
              id="companyName"
              className="text-sm font-Poppins">
              Google
            </div>
          </div>
          <div className="flex-[0.1] align-middle flex rounded-full">
            <img
              src="src/assets/images/company1.png"
              alt="Company Logo"
              className="object-contain w-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex flex-row flex-wrap gap-1 text-xs text-text">
            <span>Fresher</span> {" • "}
            <span>₹50L CTC</span> {" • "}
            <span>Hybrid</span> {" • "}
            <span>Bengaluru, India</span>
          </div>
          <div className="w-full text-xs leading-tight tracking-tight text-gray-400">
            {
              "aliqua incididunt in non incididunt laborum exercitation qui id incididunt"
            }
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
        </div>
      </div>
    </Link>
  );
};

export default ListingStudent;
