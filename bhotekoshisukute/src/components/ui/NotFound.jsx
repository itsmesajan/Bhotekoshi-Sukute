import React from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0C0E10] to-[#446182] text-white overflow-hidden">
      {/* Background lamp glow */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute bottom-0 w-full h-[25vh] bg-[#0C0E10]" />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full w-[90%] max-w-screen-xl mx-auto px-4 flex items-center justify-between md:justify-center md:gap-6 mt-[35vh]">
        {/* Left: 404 text */}
        <div className="w-1/2 flex items-center md:w-full md:justify-center">
          <div className="flex flex-col items-start md:items-center text-left md:text-center mt-[]">
            <h1 className="text-[7rem] md:text-[5rem] font-bold text-shadow-glow">404</h1>
            <p className="md:text-lg max-w-md leading-relaxed mt-2">
              The page you are looking for does not exist. How you got here is a mystery.
            </p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => window.history.back()}
                className="w-auto group flex items-center justify-center gap-2 hover:bg-navy hover:text-ivory bg-[var(--primary-color)] text-[var(--secondary-color)] px-6 py-2 rounded-full text-base transition-all duration-300 ease-linear"
                title="Go Back"
                aria-label="Go Back"
                type="button"
              >
                <HiArrowLongLeft className="group-hover:scale-x-[2] group-hover:-translate-x-1 transition-all duration-150 ease-linear" />
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Right: SVG */}
        <div className="w-1/2 relative md:w-full md:h-[300px] md:mt-6 flex justify-end items-end">
          <svg
            className="w-full max-w-sm md:max-w-xs h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="51.5 -15.288 385 505.565"
          >
            <g className="fill-[#0C0E10]">
              <path d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z" />
            </g>
            <g className="fill-[#5B3E2B] stroke-[#0C0E10] stroke-[1px]">
              <path d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z" />
            </g>
            <g className="fill-[#5B3E2B]">
              <path d="M417.361,459.027c0,0.769-1.244,1.39-2.778,1.39H170.139c-1.533,0-2.777-0.621-2.777-1.39v-4.86c0-0.769,1.244-0.694,2.777-0.694h244.444c1.534,0,2.778-0.074,2.778,0.694V459.027z" />
              <path d="M185.417,443.75H400c0,0,18.143,9.721,17.361,10.417l-250-0.696C167.303,451.65,185.417,443.75,185.417,443.75z" />
            </g>
            <g>
              {/* Lamp pole */}
              <path className="fill-[#202425]" d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z" />
              <path className="fill-[#2c3133]" d="M128.472,93.75c0,1.534-1.244,2.778-2.778,2.778h-13.889c-1.534,0-2.778-1.244-2.778-2.778V79.861c0-1.534,1.244-2.778,2.778-2.778h13.889c1.534,0,2.778,1.244,2.778,2.778V93.75z" />
              {/* Bulb */}
              <circle className="fill-[#EFEFEF] animate-pulse" cx="119.676" cy="44.22" r="40.51" />
              <path className="fill-[#202425]" d="M149.306,71.528c0,3.242-13.37,13.889-29.861,13.889S89.583,75.232,89.583,71.528c0-4.166,13.369-13.889,29.861-13.889S149.306,67.362,149.306,71.528z" />
              {/* Lamp base */}
              <path className="fill-[#202425]" d="M135.417,487.781c0,1.378-1.244,2.496-2.778,2.496H106.25c-1.534,0-2.778-1.118-2.778-2.496v-74.869c0-1.378,1.244-2.495,2.778-2.495h26.389c1.534,0,2.778,1.117,2.778,2.495V487.781z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
