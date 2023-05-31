import React from "react";
import { GoDashboard } from "react-icons/go";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrSchedulePlay } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import {FiSettings} from "react-icons/fi"

function Sidebar() {
  return (
    <div className="sidebar bg-[black]   rounded-lg px-[25px] ml-[25px] mt-[25px] my-[30px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center ">
        <h1 className="text-white text-[30px] leading-[24px] font-extrabold cursor-poinnter">
          Board.
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px]    ">
        <GoDashboard className=" text-white " />
        <h4 className="text-white cursor-pointer">Dashboard</h4>
      </div>
      <div className="flex items-center gap-[15px] py-[20px]    ">
        <AiOutlineTransaction className=" text-white " />
        <h4 className="text-white cursor-pointer">Transactions</h4>
      </div>
      <div className="flex items-center gap-[15px] py-[20px]    ">
        <GrSchedulePlay className=" text-white " />
        <h4 className="text-white cursor-pointer">Schedules</h4>
      </div>
      <div className="flex items-center gap-[15px] py-[20px]    ">
        <BiUserCircle className=" text-white " />
        <h4 className="text-white cursor-pointer">Users</h4>
      </div>
      <div className="flex items-center gap-[15px] py-[20px]    ">
        <FiSettings className=" text-white " />
        <h4 className="text-white cursor-pointer">Settings</h4>
      </div>

      <div  className="py-[140px] gap-[10px]">
        <p className="text-white py-[10px] cursor-pointer">Help</p>
        <p className="text-white cursor-pointer">Contact us</p>
      </div>
    </div>
  );
}

export default Sidebar;
