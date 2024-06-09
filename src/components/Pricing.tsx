import { useState } from "react";
import RadioToggle from "./RadioToggle";
import icon1 from "../assets/plan-1.svg";
import icon2 from "../assets/plan-2.svg";
import icon3 from "../assets/plan-3.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import Gradientcheck from "./Gradientcheck";
import check from "../assets/checkicon.svg";

const planOne = [
  "Real-time collaboration",
  "AI-powered organization",
  "Customizable templates",
  "5GB cloud storage",
  "Basic integrations",
];

const planTwo = [
  "Everything in the Individual Plan",
  "Unlimited cloud storage",
  "Advanced integrations",
  "Team management and permissions",
  "Shared templates and note libraries",
];

const planThree = [
  "Everything in the Team Plan",
  "Dedicated account manager",
  "Enterprise-grade security",
  "Customized onboarding",
  "Advanced analytics",
];
const Pricing = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-full lg:py-20 py-8 max-w-[1640px]  mx-auto my-14 px-5">
      <div className="w-full max-w-[40rem] mx-auto text-center">
        <h1 className="font-bold text text-3xl lg:text-4xl w-full mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017373] to-[#AAD9D1]">
            Pricing
          </span>{" "}
          & Plans
        </h1>
        <p className="font-light text-base text-appGray sm:text-sm w-full max-w-[23rem] mx-auto my-3">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <div className="flex justify-center gap-6 my-5">
          <h2 className="font-light text-sm sm:text-sm">Monthly</h2>
          <RadioToggle
            isActive={isActive}
            onChange={() => setIsActive((value) => !value)}
          />
          <h2 className="text-appGray font-extralight text-sm sm:text-sm">
            Yearly
          </h2>
          <button className="px-1.5 py-1 text-sm rounded-full text-appBlack bg-gradient-to-r from-[#017373] to-[#AAD9D1]">
            Save 25%
          </button>
        </div>
      </div>
      <div className="w-full max-w-[56rem] mx-auto mt-8 mb-5 grid md:grid-cols-3 gap-x-5 gap-y-8">
        {/* plan 1 */}
        <div className="bg-[#F7F7F7] py-6 px-5 rounded-lg">
          <h3 className="text-appCyan text-base font-normal my-3 flex items-center gap-2">
            <span className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
              <img src={icon1} alt="" />
            </span>
            Individual Plan
          </h3>
          <h1 className="font-bold text-appBlack text-3xl my-2">
            $9.99{" "}
            <span className="text-[#333333] text-xs font-light">/month</span>
          </h1>
          <ul className="text-[#333333] my-2">
            {planOne.map((plan, index) => (
              <li
                key={index}
                className="text-sm flex items-center gap-2 py-[0.08rem]"
              >
                <Gradientcheck />
                {plan}
              </li>
            ))}
          </ul>
          <div className="my-2.5">
            <button className="text-appBlack w-full bg-appWhite border border-appCyan  text-sm rounded-md flex gap-2 items-center justify-center">
              Start Free Trial{" "}
              <span className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
                <img src={check} alt="" />
              </span>
            </button>
            <p className="text-xs text-[#737373] text-center">
              No credit card required
            </p>
          </div>
        </div>
        {/* plan 2 */}
        <div className="bg-transparent border border-appCyan py-6 px-5 rounded-lg">
          <h3 className="text-appCyan text-base font-normal my-3 flex items-center gap-2">
            <span className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
              <img src={icon2} alt="" />
            </span>
            Individual Plan
          </h3>
          <h1 className="font-bold text-appWhite text-3xl my-2">
            $19.99{" "}
            <span className="text-appCyan text-xs font-light">/month</span>
          </h1>
          <ul className="text-[#333333] my-2">
            {planTwo.map((plan, index) => (
              <li
                key={index}
                className="text-sm flex items-center text-appGray gap-2 py-[0.08rem]"
              >
                <Gradientcheck />
                {plan}
              </li>
            ))}
          </ul>
          <div className="my-2.5">
            <button className="text-appBlack w-full bg-gradient-to-r from-[#017373] to-[#AAD9D1] border border-appCyan text-sm rounded-md flex gap-2 items-center justify-center">
              Start Free Trial{" "}
              <span className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
                <img src={check} alt="" />
              </span>
            </button>
            <p className="text-xs text-[#737373] text-center">
              No credit card required
            </p>
          </div>
        </div>

        {/* plan 3 */}
        <div className="bg-[#F7F7F7] py-6 px-5 rounded-lg">
          <h3 className="text-appCyan text-base font-normal my-3 flex items-center gap-2">
            <span className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
              <img src={icon3} alt="" />
            </span>
            Individual Plan
          </h3>
          <h1 className="font-bold text-appBlack text-3xl my-2">
            $9.99{" "}
            <span className="text-[#333333] text-xs font-light">/month</span>
          </h1>
          <ul className="text-[#333333] my-2">
            {planThree.map((plan, index) => (
              <li
                key={index}
                className="text-sm flex items-center gap-2 py-[0.08rem]"
              >
                <Gradientcheck />
                {plan}
              </li>
            ))}
          </ul>
          <div className="my-2.5">
            <button className="text-appBlack w-full bg-appWhite border border-appCyan py-2 rounded-md flex items-center justify-center">
              Start Free Trial{" "}
              <span className="py-1 px-1.5 border border-appCyan my-3 rounded-md max-w-[2rem] flex justify-center items-center">
                <img src={check} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
