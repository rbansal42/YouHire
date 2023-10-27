import { Footer, Header, Navbar } from "../containers";
import { ListingCard, QueryCard } from "../components";

const DashboardStudent = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {/* Dashboard */}
      <div className="grid items-start w-full grid-cols-6 grid-rows-6 gap-4 p-4 overflow-scroll">
        <div className="grid col-span-4 row-span-6 p-8 border rounded-lg gap-y-4 border-accent max-md:col-span-full max-lg:col-span-3">
          <div className="text-2xl font-semibold col-span-full font-Poppins">
            Available Listings
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
            <ListingCard></ListingCard>
          </div>
        </div>
        <div className="w-full h-full col-span-2 row-span-3 p-8 border rounded-lg border-accent max-md:hidden max-lg:col-span-3">
          <div className="grid gap-4 text-2xl font-semibold col-span-full font-Poppins">
            Application Status
            <div className="grid gap-4 font-normal">
              <ListingCard></ListingCard>
              <ListingCard></ListingCard>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-2 row-span-3 p-8 border rounded-lg border-accent max-md:hidden max-lg:col-span-3">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold col-span-full font-Poppins">
              Queries
            </div>
            <QueryCard />
            <QueryCard />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardStudent;
