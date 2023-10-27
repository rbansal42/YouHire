import { Footer, Header, Navbar } from "../containers";
import { company1 } from "../assets/images";

const ListingStudent = () => {
  return (
    <>
      <Header />
	  <Navbar/>
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
          {/* Apply button */}
          <button className="w-48 px-4 py-2 transition-all duration-300 border rounded shadow bg-primary hover:bg-gray-100 text-background border-accent font-Poppins">
            Apply
          </button>
        </div>

        {/* Description */}
        <div className="flex flex-col rounded-lg gap-6 border-[0.5px] border-accent  p-4">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">About Company</span>
            <p className="text-sm text-gray-300 lg:w-[70%]">
              Minim et qui qui ex et quis esse in id qui magna nisi do. Ullamco
              proident sit nisi dolore tempor ea exercitation non fugiat irure
              culpa. Eiusmod ullamco laboris sit et deserunt minim anim.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">Job Description</span>
            <p className="text-sm text-gray-300 lg:w-[70%]">
              In this role, you will work with Sales, Product, and Engineering
              teams within Google to develop better tools and services and
              improve our products based on the evolving needs of our users. You
              will provide quality customer care to Advertisers and Business
              teams, managing challenges for Google advertiser base on Display,
              YouTube, Google Analytics, Shopping, Google Marketing Platform
              (GMP), and Mobile/Apps. You will resolve sensitive and complex
              issues across Google Ads products, identifying patterns of issues
              for business and customers, partnering with Product Operations and
              Engineering to resolve product issues, and managing complex issues
              to resolution to enhance the customer experience.
            </p>
            <p className="text-sm text-gray-300 lg:w-[70%]">
              Google creates products and services that make the world a better
              place, and gTech’s role is to help bring them to life. Our teams
              of trusted advisors support customers globally. Our solutions are
              rooted in our technical skill, product expertise, and a thorough
              understanding of our customers’ complex needs. Whether the answer
              is a bespoke solution to solve a unique problem, or a new tool
              that can scale across Google, everything we do aims to ensure our
              customers benefit from the full potential of Google products.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">Responsibilities</span>
            <p className="text-sm text-gray-300 lg:w-[70%] leading-relaxed">
              <ul>
                <li className="list-disc list-inside list">
                  Prioritize and deliver customer service, advanced
                  troubleshooting and resolving complex bugs from internal Sales
                  teams and Google advertisers
                </li>
                <li className="list-disc list-inside list">
                  Engage with cross-functional partners, including Sales,
                  Engineering and Product teams, to build automation frameworks
                  to detect and prevent product bugs/issues
                </li>
                <li className="list-disc list-inside list">
                  Prototype and develop tools to enable the troubleshooting of
                  customer issues and queries to facilitate troubleshooting of
                  standard use cases
                </li>
                <li className="list-disc list-inside list">
                  Collaborate with Engineering teams on infrastructure launches
                </li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">Requirements</span>
            <p className="text-sm text-gray-300 lg:w-[70%] leading-relaxed">
              <ul>
                <li className="list-disc list-inside list">
                  Experience in system design/API, programming language
                  including data structures and algorithms, machine learning
                  basics
                </li>
                <li className="list-disc list-inside list">
                  Experience working with the Google ads network and e-commerce
                  products
                </li>
                <li className="list-disc list-inside list">
                  Understanding of backend infrastructure concepts (e.g., cache,
                  memory management), mobile app operating system, mobile app
                  data analytics product and ability to debug issues using debug
                  log
                </li>
                <li className="list-disc list-inside list">
                  Ability to interpret data to influence across cross-functional
                  stakeholders in gTech and Engineering organisations and
                  communicate technical problems to both technical and
                  non-technical audiences
                </li>
                <li className="list-disc list-inside list">
                  Ability to troubleshoot and debug tagging issues on websites
                  using developer tools (e.g., Chrome DevTools)
                </li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">Benefits</span>
            <p className="text-sm text-gray-300 lg:w-[70%]">
              <a
                href="https://www.google.com/about/careers/applications/benefits/?hl=en_US"
                className="underline">
                Check benefits here
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingStudent;
