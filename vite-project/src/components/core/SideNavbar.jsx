import React, { useState } from "react";
import styles from "./style.module.css";

const SideNavbar = ({ onCategoryChange }) => {
  let [category, setCategory] = useState("Spirituality");

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <div className="w-full md:w-56 p-3 md:p-0 md:m-2 ">
       {/* bg-gray-200 opacity-100 text-black */}
      <div className="w-full md:h-full md:min-h-screen h-full rounded-lg pt-6 bg-purple-500 opacity-100 text-white">
        <div className="">
          <div className="block  font-semibold text-xl text-center ">
            Categories
            <hr className="w-full mt-4"></hr>
          </div>
          <div className="md:flex grid md:flex-col grid-cols-2 font-medium  mt-3 gap-1 p-3">
            <div className={category==="Spirituality"?"text-black transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start bg-white rounded-md hover:text-customColor":"text-black invert hover:invert-0 transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-slate-300 rounded-md hover:text-customColor"} onClick={() => handleCategoryClick("Spirituality")}>
              <div className={styles.icon}>
                <img className="ml-3 h-6   " src="../../public/spiritual-one.png" alt="" />
              </div>
              <div className="pl-3 ">Spiritual</div>
            </div>
            <div className={category==="Technology"?"text-black transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start bg-white rounded-md hover:text-customColor":"text-black invert hover:invert-0 transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-slate-300 rounded-md hover:text-customColor"} onClick={() => handleCategoryClick("Technology")}>
              <div className={styles.icon}>
                <img className="ml-3  h-6  " src='../../public/bulb.png' alt="" />
              </div>
              <div className="pl-3">Technology</div>
            </div>
            <div className={category==="Business"?"text-black transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start bg-white rounded-md hover:text-customColor":"text-black invert hover:invert-0 transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-slate-300 rounded-md hover:text-customColor"} onClick={() => handleCategoryClick("Business")}>
              <div className={styles.icon}>
                <img className="ml-3 h-6  " src='../../public/briefcase.png' alt="" />
              </div>
              <div className="pl-3">Business</div>
            </div>
            <div className={category==="Sports"?"text-black transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start bg-white rounded-md hover:text-customColor":"text-black invert hover:invert-0 transition-all delay-200 cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-slate-300 rounded-md hover:text-customColor"} onClick={() => handleCategoryClick("Sports")}>
              <div className={styles.icon}>
                <img className="ml-3 h-6  " src='../../public/sport-two.png' alt="" />
              </div>
              <div className="pl-3">Sports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;