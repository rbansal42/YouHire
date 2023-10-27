import React from "react";
import { QueryCard } from "../components";
import { Header, Navbar, Footer } from "../containers";

const ActiveQueriesPage = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {/* Dashboard */}
      <div className="grid items-start w-full grid-cols-6 grid-rows-6 gap-4 p-4 overflow-scroll">
        <div className="w-full h-full row-span-3 p-8 border rounded-lg col-span-full border-accent max-md:hidden max-lg:col-span-3">
          <div className="grid gap-4 text-2xl font-semibold col-span-full font-Poppins">
            Application Status
            <div className="grid col-span-2 gap-4 font-normal">
              <QueryCard></QueryCard>
              <QueryCard></QueryCard>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ActiveQueriesPage;
