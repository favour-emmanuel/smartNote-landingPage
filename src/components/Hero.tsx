import { Icon } from "@iconify/react/dist/iconify.js";
import image from "../assets/heroImg.svg";
import img1 from "../assets/brands/logo-1.svg";
import img2 from "../assets/brands/logo-2.svg";
import img3 from "../assets/brands/logo-3.svg";
import img4 from "../assets/brands/logo-4.svg";
import img5 from "../assets/brands/logo-5.svg";
import img6 from "../assets/brands/logo-6.svg";
import img7 from "../assets/brands/logo-7.svg";
import img8 from "../assets/brands/logo-8.svg";

interface Brand {
  logo: string;
}

const brandLogo: Brand[] = [
  {
    logo: img1,
  },
  {
    logo: img2,
  },
  {
    logo: img3,
  },
  {
    logo: img4,
  },
  {
    logo: img5,
  },
  {
    logo: img6,
  },
  {
    logo: img7,
  },
  {
    logo: img8,
  },
];

const Hero = () => {
  return (
    <div className="w-full lg:py-14 py-8 max-w-[1640px]  mx-auto border-t border-t-[#048c8157]">
      <div className="flex flex-col md:flex-row md:gap-8 gap-y-20 justify-between my-5 lg:px-[6.2rem] px-5">
        <div className="w-full lg:max-w-[40rem] md:max-w-[25rem]">
          <h1 className="text-5xl font-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017373] to-[#AAD9D1]">
              Intelligent
            </span>{" "}
            cloud-based{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017373] to-[#AAD9D1]">
              note-taking
            </span>{" "}
            and collaboration tool
          </h1>
          <p className="w-full text-base sm:text-sm my-3 font-light">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
          <div className="flex justify-between items-center w-full max-w-[24rem] mt-10 bg-appWhite border-appCyan pl-3 pr-1.5 py-2 rounded-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-[#333333] text-sm bg-transparent outline-none px-1 w-full max-w-[15rem]"
            />
            <button className="flex items-center gap-2 text-sm text-appBlack bg-gradient-to-r from-[#017373] to-[#AAD9D1] p-2.5 rounded-md">
              Sign Up{" "}
              <span className="border border-[#333333] p-1 rounded-md text-appBlack">
                <Icon icon="akar-icons:arrow-up-right" />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-[-3rem] w-full lg:max-w-[22rem] md:max-w-[15rem]">
          <img src={image} alt="" />
        </div>
      </div>
      {/* brands Logos */}
      <div className="overflow-hidden w-full my-10">
        <div className="flex gap-10 animate-flow w-full relative">
          {brandLogo.map((brand, index) => (
            <>
              <img
                key={index}
                src={brand.logo}
                alt="Brand Logos"
                className=""
              />
            </>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[28rem] mt-14 lg:px-0 px-5">
        <h1 className="text-center font-bold text-base sm:text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017373] to-[#AAD9D1] text-6xl ">
            "
          </span>
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.{" "}
        </h1>
        <p className="flex justify-center gap-5 my-5 text-sm">
          Sarah Johnson
          <span className="text-[#737373]">TechSavvy Solutions</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
