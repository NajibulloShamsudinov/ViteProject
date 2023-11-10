import React from "react";
import "./App.css";
import img1 from "./assets/home1.png";
import img2 from "./assets/home2.png";
import img3 from "./assets/home3.png";
import img4 from "./assets/home4.png";
import img5 from "./assets/home5.png";
import img6 from "./assets/home6.png";

import dom1 from "./assets/dom1.png";
import dom2 from "./assets/dom2.png";
import dom3 from "./assets/dom3.png";

import last from "./assets/last.png";

import last2 from "./assets/last2.png";

import fcb from "./assets/facebook (1).png";
import twt from "./assets/twitter.png";
import inst from "./assets/instagram-logo.png";

function App() {
  
  return (
    <div>
      <div className="section1 mt-[37px] mb-[110px]">
        <div className="container">
          <div className=" md:flex justify-between items-center sm:block  sm:text-center">
            <h1 className="font-semibold text-[32px]">Cootels</h1>
            <nav className="sm:pt-[20px] md:pt-0">
              <a href="#" className="pl-[32px] font-medium text-base">
                Rooms
              </a>
              <a href="#" className="pl-[32px]  font-medium text-base">
                Reservation
              </a>
              <a href="#" className="pl-[32px]  font-medium text-base">
                Contacs
              </a>
            </nav>
            <div className="sm:pt-[15px] md-0">
              <button className="bg-[black]  w-[121px] h-[47px]  rounded-[4px] text-[white] text-[16px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="container">
          <div className="md:flex items-center sm:block">
            <div className="md:w-[45%] ">
              <h1 className="text-[45px] text-semibold">
                Nature, Warmth, and Beauty in One Space
              </h1>
              <p className=" pt-[24px]">
                One place to release all the stress, bring back happines,
                <br />
                and get back to nature. We provide the best room and
                <br /> nature for you. Come visit us anytime you want.
              </p>
              <div className="pt-[24px] sm:pb-[10px]">
                <button className="bg-[black]  w-[121px] h-[47px] rounded-[4px] text-[white] text-[16px]">
                  Reservation
                </button>
              </div>
            </div>

            <div className="flex sm:w-[340px]">
              <img
                src={img1}
                className="md:h-[588px] sm:w-[110px] sm:h-[400px] md:w-[180px]"
              />
              <img
                src={img2}
                className="pt-[81px] pl-[24px] sm:w-[110px] sm:h-[400px] md:w-[180px] pr-[24px] md:h-[588px]"
              />
              <img
                src={img3}
                className="md:h-[588px] sm:w-[110px] sm:h-[400px] md:w-[180px] "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section3 md:mt-[160px] sm:mt-[50px]">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <div className="">
              <img src={img4} className="w-[384px] h-[576px]" />
            </div>
            <div className="md:w-[45%]">
              <h1 className="text-[45px] text-semibold">
                Cozy and Down to Earth Cootage Hotel in Norway.
              </h1>
              <p className=" pt-[24px]">
                Our Cootage Hotel is an intimate hideway concieved for dicerning
                travelers. It faces directly the unique and spectacular panorama
                of the Hallerbos Jungle. and get back to nature. We provide the
                best room and
              </p>
              <p>
                Cootels extends along a private, quiet, and beautiful nature.
                Stay away from crowd and enjoy the cozy and beauty with us.
              </p>
              <div className="py-[24px]">
                <button className="bg-[black]  w-[121px] h-[47px] rounded-[4px] text-[white] text-[16px]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 md:mt-[160px] sm:mt-[50px]">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <div className="md:w-[45%]">
              <h1 className="text-[36px] text-semibold">Cabin Activities</h1>
              <p className="text-[#848FAC] text-[18px] pt-[24px]">
                Don’t worry to get bored easily in our cabin. We have so many
                cabin activities for you to do it alone or with group. Maybe
                this is the best chance for you to make new friends or even a
                lover.
              </p>
            </div>
            <div>
              <img src={img5} />
            </div>
          </div>
        </div>
      </div>

      <div className="section4 mt-[24px]">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <div>
              <img src={img6} />
            </div>
            <div className="md:w-[45%]">
              <h1 className="text-[36px] text-semibold">100% Organic Food</h1>
              <p className="text-[#848FAC] text-[18px] pt-[24px]">
                We served 100% organic, low process and delicious food. We allow
                our guest to have breakfast or dinner request.What ever made
                your taste buds happy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section5  md:mt-[160px] sm:mt-[50px]">
        <div className="container">
          <div className="text-center">
            <h1 className="text-[36px] font-semibold">Many Rooms to Choose</h1>
            <p className="text-[#848FAC] text-[18px]">
              There is a room for every needs. We have room for individuals
              until
              <br /> family size, we also have a cabin for more private
              experience
            </p>
            <div className="pt-[24px] sm:pb-[10px]">
              <button className="bg-[black]  w-[121px] h-[47px] rounded-[4px] text-[white] text-[16px]">
                Explore more
              </button>
            </div>
          </div>
          <div className="mt-[88px] md:flex md:gap-[15px]">
            <div className="sm:my-[32px]">
              <img src={dom1} />
              <h1 className="font-bold text-[24px] pt-[15px]">Single home</h1>
              <p>
                Best for a brave lone wolf who need comfort and quiet quality
                time, but you still have a chance to meet others.
              </p>
              <button> Learn more</button>
            </div>
            <div className="sm:my-[32px]">
              <img src={dom2} />
              <h1 className="font-bold text-[24px]  pt-[15px]">Single home</h1>
              <p>
                Best for a brave lone wolf who need comfort and quiet quality
                time, but you still have a chance to meet others.
              </p>
              <button> Learn more</button>
            </div>
            <div className="sm:my-[32px]">
              <img src={dom3} />
              <h1 className="font-bold text-[24px] pt-[15px]">Single home</h1>
              <p>
                Best for a brave lone wolf who need comfort and quiet quality
                time, but you still have a chance to meet others.
              </p>
              <button> Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section6  md:mt-[80px]  sm:mt-[50px]">
        <div className="container md:flex justify-between items-center">
          <div>
            <p>Start your journey!</p>
            <h1 className="text-[32px]">How to Get My Room?</h1>
            <p className="text-[#848FAC] text-[18px] py-[24px]">
              You can contact us by phone or email us.
              <br /> Easily tap the contact button below and it
              <br /> will take you to our contact point
            </p>
            <div className="sm:pt-[15px] md-0">
              <button className="bg-[black]  w-[121px] h-[47px]  rounded-[4px] text-[white] text-[16px]">
                Contact us
              </button>
              <button className="pl-[24px]">Explore more room</button>
            </div>
          </div>
          <div className="sm:mt-[50px] md:mt-[0]">
            <div className="md:w-[588px] sm:w-[340px] h-[100px] rounded-[4px] bg-[white]  text-center mt-[24px] shadow-lg">
              <h1 className="text-[24px]">1. Choose a room and date</h1>
            </div>
            <div className="md:w-[588px]  sm:w-[340px] h-[100px] rounded-[4px] bg-[white] shadow-lg text-center mt-[24px] ">
              <h1 className="text-[24px]">2. Check for room availability</h1>
            </div>
            <div className="md:w-[588px]  sm:w-[340px] h-[100px] rounded-[4px] bg-[white] shadow-lg  text-center mt-[24px] ">
              <h1 className="text-[24px]">3. Enjoy your room</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section7 mb-[80px] md:mt-[160px] sm:mt-[50px]">
        <div className="container">
          <div className="flex flex-col gap-[40px] items-center justify-center">
            <h1 className="text-[36px] font-semibold text-center">
              Hear From Our Happy Customers
            </h1>
            <img src={last} />
            <p className="text-[#848FAC] text-[18px] text-center">
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much
              <br /> activity even with your famility. Worth every penny! you
              should come and see for your self. 5<br /> out of 5! the waffle is
              great!”
            </p>
            <h1>Kirana Dunham</h1>
            <img src={last2} />
          </div>
        </div>
      </div>

      <div className="section8 bg-[#0B265A] pb-[60px] md:h-[444px] sm:h-[1000px]">
        <div className="container">
          <div className="md:flex md:justify-between pt-[120px] sm:flex-wrap sm:flex-col md:flex-row sm:text-center ">
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] text-[white] font-bold">Cootels</h1>
              <p className="text-[16px] text-[#D9DBDE]">
                Your Best Private
                <br /> Hideway From Crowd.
                <br /> Back to Nature.
              </p>
              <div className="flex pt-[20px] gap-[10px]  sm:justify-center">
                <img src={fcb} />
                <img src={twt} />
                <img src={inst} />
              </div>
            </div>
            <div className="md:flex sm:flex-col md:flex-row md:gap-[60px] ">
              <div className="text-[white] flex flex-col gap-4 sm:pt-[50px] md:pt-[0]">
                <h1 className="text-[24px] ">Rooms</h1>
                <p>Single page</p>
                <p>Double page</p>
                <p>Cabin</p>
                <p>Custom</p>
              </div>

              <div className="text-[white] flex flex-col gap-4 sm:pt-[50px] md:pt-[0]">
                <h1 className="text-[24px]">Contact</h1>
                <p>Single page</p>
                <p>Double page</p>
                <p>Cabin</p>
              </div>
              <div className="text-[white] flex flex-col gap-4 sm:pt-[50px] md:pt-[0]">
                <h1 className="text-[24px]">Reservetion</h1>
                <p>Single page</p>
                <p>Double page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
