import image from "../assets/VIdeo .svg";
import blur1 from "../assets/blur-1.svg";
import blur2 from "../assets/blur-2.svg";

const VideoSection = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto my-5 px-5 relative">
      <img
        src={blur1}
        alt=""
        className="absolute top-[-12rem] left-[7rem] max-w-[24rem] blur-md"
      />
      <div className="mx-auto w-full max-w-[50rem] ">
        <img
          src={blur2}
          alt=""
          className="absolute bottom-[8rem] right-[8rem] max-w-[20rem] blur-md"
        />
        <img src={image} alt="" className="relative z-10" />
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

export default VideoSection;
