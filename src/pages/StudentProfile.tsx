import { student1 } from "../assets/images";
import { Footer, Header, Navbar } from "../containers";

const StudentProfile = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="border-accent border-[0.5px] rounded-lg p-4 flex flex-col">
        {/* Name, Title and Photo Starts*/}
        <div className="flex flex-row items-center gap-4 align-middle">
          {/* Image div starts */}
          <div className="flex-[0.1] rounded-full">
            <img
              src={student1}
              alt="Profile Picture"
			  className="rounded-full"
            />
          </div>
          {/* Image div ends */}

          {/* Name div starts */}
          <div className="flex flex-col flex-1 gap-2">
            <div>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your name"
                className="px-2 py-1 text-sm rounded-lg text-neutral-900"
              />
            </div>
            <div>
              <input
                type="text"
                name="userTitle"
                id="userTitle"
                placeholder="Enter your title"
                className="px-2 py-1 text-sm rounded-lg text-neutral-900"
              />
            </div>
          </div>
          {/* Name div ends */}
        </div>
        {/* Name, Title and Photo Ends*/}
      </div>
      <Footer />
    </>
  );
};

export default StudentProfile;
