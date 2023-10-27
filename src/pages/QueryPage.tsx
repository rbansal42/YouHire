import { Footer, Header, Navbar } from "../containers";
import { company1 } from "../assets/images";
import { QueryAnswer, QueryQuestion } from "../components";

const QueryPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col gap-4 p-8 font-Poppins">
        {/* Essential details */}
        <div className="border-[0.5px] border-accent p-4 rounded-lg flex flex-col gap-4">
          {/* Title and company*/}
          <div className="flex flex-row items-center align-middle gap-x-6">
            <div className="flex flex-col flex-1 gap-0">
              <div className="text-2xl font-semibold col-span-full font-Poppins max-md:text-xl">
                Full Stack Web Developer
              </div>
              <div className="text-xl max-md:text-lg">Google</div>
            </div>
            <div className="flex-[0.1] align-middle flex rounded-full">
              <img
                src={company1}
                alt="Company Logo"
                className="object-contain w-full rounded-full max-h-[50px]"
              />
            </div>
          </div>
          {/* Highlights */}
          <div className="flex flex-row flex-wrap gap-1 pt-4 text-base hr w-[80%] text-text">
            <span>Fresher</span> {" • "}
            <span>₹50L CTC</span> {" • "}
            <span>Full-Time</span> {" • "}
            <span>Hybrid</span> {" • "}
            <span>Bengaluru, India</span>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col rounded-lg gap-6 border-[0.5px] border-accent  p-4">
          <div className="flex flex-col gap-2">
            <QueryQuestion />
            <QueryAnswer />
            <QueryQuestion />
            <QueryAnswer />
            <QueryQuestion />
            <QueryAnswer />
          </div>
          
          </div>
        </div>
      <Footer />
    </>
  );
};

export default QueryPage;
