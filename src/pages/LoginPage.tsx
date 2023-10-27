import { Header } from "../containers";
import { Footer } from "../containers";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row bg-background align-middle items-center justify-center h-[80vh]">
        <div
          id="loginCard"
          className="flex flex-col justify-center items-center align-middle border-[0.5px] border-accent px-8 py-4 font-Poppins w-[40%] sm:w-[70%] max-sm:w-[80%] md:w-[650px]">
          <div className="font-semibold text-2xl w-full border-b-[0.5px] border-accent uppercase tracking-widest justify-center flex pt-2 pb-4 ">
            Login
          </div>
          <div className="flex flex-row items-start justify-start w-full py-4">
            <form
              action="/"
              className="w-full">
              <label htmlFor="userName">Username</label> <br />
              <input
                type="text"
                name="userName"
                id="login_userName"
                placeholder="Enter your email/username"
				required
                className="w-full py-2 pl-2 pr-6 mt-2 text-sm rounded-md outline-none text-accent"
              />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                id="login_password"
                placeholder="Enter your password"
				required
                className="w-full py-2 pl-2 pr-6 mt-2 text-sm rounded-md outline-none text-accent"
              />
              <div className="flex flex-row gap-2 pt-4 max-sm:flex-col">
                <Link to={"/dashboard"}>
                  <button
                    className="bg-primary hover:bg-gray-100 text-background py-2 px-4 border border-accent rounded shadow font-Poppins transition-all duration-300 min-w-[120px] max-sm:w-full"
                    type="submit">
                    Login
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="bg-secondary hover:bg-gray-100 text-text py-2 px-4 border border-accent rounded shadow font-Poppins transition-all duration-300 min-w-[120px] hover:text-black max-sm:w-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LoginPage;
