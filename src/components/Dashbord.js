import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import Main from "./Main";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  const navigate=useNavigate()
  return (
    <div>
      <div className="flex items-center pl-[25px] pt-[20px] ml-[25px]">
        <h2 className="text-[25px]  font-extrabold">Dashboard</h2>

        <div className="flex items-center rounded-[5px] pl-[650px] pt-[30px]">
          <input
            type="text"
            className="bg-[white] outline-none pl-[13px] w-[200px] rounded -lg placeholder:text-[10px]leading-[20px] font-normal   "
            placeholder="Search"
          />
          <div className="flex items-center justtify-center   rounded-tr-[5px] rounded-br-[5px]  h-[25px] gap-[15px] ">
            <AiOutlineSearch className="text-sm cursor-pointer" />
            <IoMdNotificationsOutline className="cursor-pointer"/>
            <BiUserCircle className="cursor-pointer" onClick={() => navigate("/")}/>
          </div>
        </div>
      </div>
      <div>
        <Main/>
      </div>
    </div>
  );
}

export default Dashbord;
