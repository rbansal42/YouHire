import { Link } from "react-router-dom";
import { ResumeCard } from "../components";
import { Footer, Header, Navbar } from "../containers";

const MyResumes = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="grid items-start w-full grid-cols-6 grid-rows-6 gap-4 p-4 overflow-scroll">
        {/* Resume collection starts */}
        <div className="w-full h-full row-span-3 p-8 border rounded-lg col-span-full border-accent">
          <div className="grid gap-4 text-2xl font-semibold col-span-full font-Poppins">
            My Resumes
            <div className="flex flex-row flex-wrap gap-4 font-normal">
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
            </div>
          </div>
        </div>
        {/* Resume collection ends */}
        {/* Hover button to add new resume starts*/}
        <Link to={"https://resumify.netlify.app/"}>
          <button className="sticky px-4 py-2 text-black border border-accent right-8 bottom-8 bg-primary rounded-xl hover:bg-white">
            Create
          </button>
        </Link>
        {/* Hover button to add new resume ends*/}
      </div>
      <Footer />
    </>
  );
};

export default MyResumes;
