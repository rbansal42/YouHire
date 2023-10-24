import { Footer, Header } from "../containers";
import { ListingCard } from "../components";

const DashboardStudent = () => {
  return (
    <>
      <Header></Header>

      {/* Dashboard */}
      <div className="grid items-start w-full grid-cols-6 grid-rows-6 gap-4 p-4 overflow-scroll">
        <div className="grid col-span-4 p-8 border rounded-lg gap-y-4 border-accent row-span-full max-md:col-span-full">
          <div className="text-2xl font-semibold col-span-full font-Poppins">
            Available Listings
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
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
        <div className="w-full h-full col-span-2 row-span-3 p-8 border rounded-lg border-accent max-md:hidden">
          <div className="grid gap-4 text-2xl font-semibold col-span-full font-Poppins">
            Application Status
            <div className="grid gap-4 font-normal">
              <ListingCard></ListingCard>
              <ListingCard></ListingCard>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-2 row-span-3 p-8 border rounded-lg border-accent max-md:hidden">
          <div className="text-2xl font-semibold col-span-full font-Poppins">
            Queries
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardStudent;
