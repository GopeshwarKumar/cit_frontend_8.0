import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft, FaQuestion } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiCrossMark} from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import {motion} from 'framer-motion'

function Navbar() {

  const location=useLocation()

  const [open, setopen] = useState(false);
  const [translate, settranslate] = useState("-translate-x-[350px]");
  const openhamburgerMenu = () => {
    setopen(true);
    settranslate("-translate-x-[0px]");
  };
  const closehamburgerMenu = () => {
    settranslate("-translate-x-[350px]");
    setopen(false);
  };

  return (
    <>
      <nav className="w-screen h-[8vh] flex items-center justify-between shadow-lg hover:shadow-2xl duration-300 transition-all hover:shadow-slate-900 px-[2vw]">
        <motion.div viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}>
          {location.pathname=== '/home'? <img
            src="/assets/istelogo.png"
            alt="lost"
            className="2xl:w-[70px] 2xl:h-[70px] xl:w-[60px] xl:h-[60px]  lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px] w-[40px] h-[40px] hover:scale-110 transition-all "
          /> :<Link to={'/home'} className={`vmd:hidden sm:block font-bold no-underline py-[2px] px-[10px] 2xl:text-[20px] sm:text-[18px] vmd:text-[12px] rounded-md text-[10px] text-red-600 hover:text-yellow-300 transition-all duration-100`}>
          <FaArrowLeft title="Go Back" className="text-[30px] "/>
          </Link>}
        </motion.div>
        {/* hamburger links */}
        {/* navlinks */}
        <div className="flex items-center gap-[10px] ">
          <div className="group flex flex-col items-center ">
            <IoHome className="text-blue-600 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-200" />
          <motion.div viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}>
            <Link
            to={"/home"} title={"home"}
            className={`googlefont ${location.pathname==="/home" && "bg-red-400 rounded-md"} vmd:hidden sm:block font-bold no-underline py-[2px] px-[10px] 2xl:text-[20px] sm:text-[18px] vmd:text-[12px] text-black hover:text-blue-600 transition-all duration-100`}>
            Home
          </Link>
          </motion.div>
          </div>

          <div className="group flex flex-col items-center ">
            <FcAbout className="text-blue-600 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-200" />
            <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}>
              <Link
            to={"/about"}
            title={"about"}
            className={` ${location.pathname === "/about" && "bg-red-400 rounded-md"} vmd:hidden sm:block font-bold no-underline py-[2px] px-[10px] 2xl:text-[20px] sm:text-[18px] vmd:text-[12px] text-black hover:text-blue-600 transition-all duration-100 flex flex-col items-center `}>
            About Us
            </Link>
            </motion.div>
          </div>
          
          <div className="group flex flex-col items-center ">
            <FaQuestion className="text-blue-600 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-200" />
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}>
            <Link
            to={"/faqs"} title={"faqs"}
            className={`${location.pathname==="/faqs" && "bg-red-400 rounded-md"} vmd:hidden sm:block font-bold no-underline py-[2px] px-[10px] 2xl:text-[20px] sm:text-[18px] vmd:text-[12px] text-black hover:text-blue-600 transition-all duration-100`}
          >
            Faqs
          </Link>
          </motion.div>
          </div>

          <div className="group flex flex-col items-center ">
            <MdLeaderboard className="text-blue-600 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-200" />
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}>
            <Link
            to={"/leaderboard"} title={"leaderboard"}
            className={`${location.pathname==="/leaderboard" && "bg-red-400 rounded-md"} vmd:hidden sm:block font-bold no-underline py-[2px] px-[10px] 2xl:text-[20px] sm:text-[18px] vmd:text-[12px] text-black hover:text-blue-600 transition-all duration-100`}
          >
            LeaderBoard
          </Link>
          </motion.div>
          </div>

          <div className="group flex flex-col items-center ">
            <CgProfile className="text-blue-600 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-200" />
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}>
            <Link
            to={"/profile"} title={"profile"}
            className={`${location.pathname==="/profile" && "bg-red-400 rounded-md"} vmd:hidden sm:block font-bold no-underline py-[2px] px-[10px] 2xl:text-[20px] sm:text-[18px] vmd:text-[12px] text-black hover:text-blue-600 transition-all duration-100`}>
            Profile
          </Link>
          </motion.div>
          </div>
          {open === true ? (
            <GiCrossMark
              onClick={closehamburgerMenu}
              className="m-4 cursor-pointer text-red-500"
            />
          ) : (
            <div onClick={openhamburgerMenu} className="vmd:block sm:hidden cursor-pointer duration-200  vmd:mt-2 flex items-center justify-center">
              <div className="w-6 h-1 bg-red-600 m-[2px]"></div>
              <div className="w-6 h-1 bg-white rounded-xl m-[2px]"></div>
              <div className="w-6 h-1 bg-yellow-300 m-[2px]"></div>
            </div>
          )}
        </div>
        {/* mobile phones */}

        <div
          className={`absolute sm:hidden w-[50vw] flex items-center justify-center gap-[10px] duration-200 bg-slate-900 shadow-inner shadow-slate-800 rounded-r-3xl translate-y-[90px] ${translate} transition-all duration-300`}
        >
          <div className="w-screen flex flex-col items-center justify-center p-10">
            <Link to={"/home"}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3 }}
              className="font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-yellow-300 transition-all cursor-pointer w-full"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-yellow-300 transition-all cursor-pointer w-full"
            >
              About Us
            </Link>
            <Link
              to={"/faqs"}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-yellow-300 transition-all  cursor-pointer w-full"
            >
              Faqs
            </Link>
            <Link
              to={"/leaderboard"}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-yellow-300 transition-all cursor-pointer w-full"
            >
              LeaderBoard
            </Link>
            <Link
              to={"/profile"}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-yellow-300 transition-all  cursor-pointer w-full"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
