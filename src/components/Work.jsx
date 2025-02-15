import React from "react";
import Carsite from "../assets/projects/carsite.png";
// import VotingSystem from '../assets/projects/votingsystem.png';
// import Dictionary from '../assets/projects/dictionary.png';
import chargeit from "../assets/projects/chargeit1.png";
import packnchew from "../assets/projects/packnchew.png";
// import mycontacts from '../assets/projects/mycontacts.jpeg';

const Work = () => {
  return (
    <div
      name="work"
      className="bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 w-full min-h-screen py-8"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${chargeit})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Charge IT
              </span>
              <div className="pt-8 text-center">
                <a href="https://chargingit.netlify.app/" target="new">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shazam-08/ChargeIT" target="new">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${packnchew})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                PACK n CHEW
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Shazam-08/PacknChew" target="new">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            style={{ backgroundImage: `url(${VotingSystem})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Online Voting System
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.github.com/hneelabh/Online_Voting_System"
                  target="new"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div
            style={{ backgroundImage: `url(${mycontacts})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                My Contacts - Backend
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.github.com/hneelabh/mycontacts"
                  target="new"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div
            style={{ backgroundImage: `url(${Dictionary})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Simple Dictionary
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://hneelabh.github.io/English-Dictionary/"
                  target="new"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://www.github.com/hneelabh/English-Dictionary"
                  target="new"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          <div
            style={{ backgroundImage: `url(${Carsite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://shazam-08.github.io/Nextjs-weather_app/"
                  target="new"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
