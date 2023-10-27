import { Footer, Header, Navbar } from "../containers";
import { ListingCard } from "../components";

const ActiveListings = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {/* Dashboard */}
      <div className="grid items-start w-full grid-cols-6 grid-rows-6 gap-4 p-4 overflow-scroll">
        <div className="grid row-span-6 p-8 border rounded-lg col-span-full gap-y-4 border-accent max-md:col-span-full max-lg:col-span-full">
          <div className="text-2xl font-semibold col-span-full font-Poppins">
            Available Listings
          </div>
          <div className="grid gap-4 lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default ActiveListings;
