import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function toTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="px-5 md:px-12 lg:px-20 py-5 text-body-4 sm:flex md:text-body-3">
      <div className="flex items-end justify-between w-[100%]">
        <div className="">
          <div className="flex w-[100%] items-end justify-between">
            <div className="flex flex-col space-x-1 text-works-title leading-5">
              <div>
                <span>&copy;</span>
                <span className="font-extrabold">2025</span>
              </div>
              <span className="font-extrabold uppercase">Ernest Anokye</span>
              <span className="font-extrabold uppercase">
                All rights reserved
              </span>
            </div>
          </div>
        </div>

        {/* Local Time Section Moved to the Right */}
        <div className="ml-4 space-y-1 text-right text-[14px] 2xl:text-3xl">
          <h4 className="font-bold">LOCAL TIME</h4>
          <p className="flex gap-1">{time}, Accra <span className="hidden md:block">Ghana</span></p> 
        </div>

        <button
          onClick={toTop}
          className="group col-span-2 hidden w-fit items-center space-x-2 md:flex 2xl:text-body-1"
        >
          <span className="font-extrabold uppercase duration-200 hover:font-black">
            BACK TO TOP
          </span>
          <span className="duration-300 ease-in-out group-hover:-translate-y-3">
            <svg
              className="-rotate-90"
              width="24"
              height="24"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_238_1313)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                  fill="url(#paint0_linear_238_1313)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_238_1313"
                  x1="14"
                  y1="26"
                  x2="179"
                  y2="179.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D1D1C7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </button>
      </div>

      <div className="mt-3 text-center md:hidden">
        <span className="text-body-4 2xl:text-body-1">
          Site designed and coded with ❤️‍🔥
        </span>
      </div>
    </footer>
  );
}
