import React from "react";

const LandingPage = () => {
  return (
    <div className="h-screen overflow-hidden text-white bg-white/10 backdrop-blur-2xl flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <img
        src="logo_white.png"
        alt="FOSS of Nature Logo"
        className="max-sm:scale-[60%] scale-[80%] sm:absolute mt-[-5rem] sm:top-[2rem] sm:left-[63rem]"
      />
      <div className="flex flex-col max-sm:items-center max-sm:text-center gap-[1.7rem]  w-10/12 sm:w-[28rem] sm:mx-[2rem] mt-[-5rem] sm:mt-[21rem]">
        <h1 className="max-sm:text-[2.5rem] text-[3.5rem]">
          Innovations For A Better Tomorrow
        </h1>
        <p className="text-[1.1rem]">
          Book your tickets now to ensure a spot in the largest meetup of the
          FOSS community this year
        </p>
        <div className="flex gap-[2rem] max-sm:flex-col">
          <button className="bg-white font-[500] text-black rounded-[3rem] px-[1.5rem] py-[0.8rem] border-white border-[0.15rem] duration-100 hover:bg-opacity-0 hover:text-white hover:scale-105">
            Book Tickets
          </button>
          <button className="text-white font-[500] border-white border-[0.15rem] duration-100 hover:bg-white hover:text-black rounded-[3rem] px-[1.5rem] py-[0.8rem] hover:scale-105">
            Relive FOSS of Nature 2.0
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
