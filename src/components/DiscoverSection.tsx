import thumb from "../assets/thumb.svg";
import globe from "../assets/globe.svg";
import flag from "../assets/flag.svg";
import collab from "../assets/collab.svg";
import hashtag from "../assets/hashtag.svg";
import integration from "../assets/integrations.svg";

interface Discover {
  icon: string;
  heading: string;
  text: string;
}

const topArray: Discover[] = [
  {
    icon: thumb,
    heading: "Cross-Platform Accessibility",
    text: "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.",
  },
  {
    icon: globe,
    heading: "Customizable Templates",
    text: "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.",
  },
];

const data: Discover[] = [
  {
    icon: flag,
    heading: "Secure Cloud Storage",
    text: "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.",
  },
  {
    icon: collab,
    heading: "Real-Time Collaboration",
    text: "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.",
  },
  {
    icon: hashtag,
    heading: "AI-Powered Organization",
    text: "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
  },
  {
    icon: integration,
    heading: "Integrations",
    text: "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c",
  },
];

const DiscoverSection = () => {
  return (
    <>
      <div className="w-full lg:py-8 py-8 max-w-[1640px]  mx-auto my-14 lg:px-[6.2rem] px-5">
        <div className="mx-auto w-full max-w-[70rem] text-center">
          <h1 className="font-bold text text-3xl lg:text-4xl">
            Discover the Power of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017373] to-[#AAD9D1] ">
              SmartNotes
            </span>
          </h1>
          <p className="font-extralight text-base sm:text-sm w-full max-w-[23rem] mx-auto my-3">
            SmartNotes is packed with innovative features designed to
            revolutionize the way you take notes, collaborate with others, and
            stay organized.
          </p>
        </div>
        <div className="py-10 w-full mx-auto max-w-[60rem]">
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-5 my-3">
            {topArray.map((data, index) => (
              <div
                key={index}
                className="border border-appCyan py-3 px-3.5 rounded-lg w-full lg:max-w-[34rem] h-[12rem]"
              >
                <div className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
                  <img src={data.icon} alt="" />
                </div>
                <h3 className="font-bold text-base sm:text-sm my-2">
                  {data.heading}
                </h3>
                <p className="text-sm sm:text-sm font-light">{data.text}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-2 gap-x-4 gap-y-5 my-2">
            {data.map((data, index) => (
              <div
                key={index}
                className="border border-appCyan py-3 px-3.5 rounded-lg w-full lg:max-w-[14rem] lg:h-[18rem]"
              >
                <div className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
                  <img src={data.icon} alt="" />
                </div>
                <div className="w-full lg:max-w-[12.5rem] lg:h-[12rem]">
                  <h3 className="font-bold text-lg sm:text-base my-2 w-full max-w-[11rem] h-[3rem]">
                    {data.heading}
                  </h3>
                  <p className="text-sm sm:text-sm font-light">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* testimonial */}
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
    </>
  );
};

export default DiscoverSection;
