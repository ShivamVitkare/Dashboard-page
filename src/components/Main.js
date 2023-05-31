import React from "react";

import { BiMoney } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { Chart } from "react-google-charts";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const pdata = [
  {
    name: "0",
    Guest: 100,
    Users: 150,
  },

  {
    name: "Week 1",
    Guest: 250,
    Users: 200,
  },
  {
    name: "Week 2",
    Guest: 120,
    Users: 170,
  },
  {
    name: "Week 3",
    Guest: 400,
    Users: 370,
  },
  {
    name: "Week 4#",
    Guest: 100,
    Users: 110,
  },
];
export const data = [
  ["Task", ""],
  ["Basic Tees", 55],
  ["Custom Short Pants", 31],
  ["Super Hoodies", 14],
];

export const options = {
  title: "",
};
function Main() {
  return (
    <div className="pt-[25px]">
      <div className="grid grid-cols-4  pb-[15px]  ">
        <div className="h-[90px] rounded-[10px] bg-[#DDEFE0] w-[170px] ml-[35px] mt-[20px]">
          <div>
            <BiMoney className="ml-[140px] mt-[15px] icon" />
          </div>
          <p className="ml-[15px]">Total Revenues</p>
          <h2 className="font-bold ml-[15px]">$2,129,430</h2>
        </div>
        <div className="h-[90px] rounded-[10px] bg-[#F4ECDD] w-[170px] ml-[5px] mt-[20px]">
          <div>
            <AiOutlineTransaction className="ml-[140px] mt-[15px] icon" />
          </div>
          <p className="ml-[15px]">Total Transactions</p>
          <h2 className="font-bold ml-[15px]">1,520</h2>
        </div>
        <div className="h-[90px] rounded-[10px] bg-[#EFDADA] w-[170px] ml-[5px] mt-[20px]">
          <div>
            <AiOutlineLike className="ml-[140px] mt-[15px] icon" />
          </div>
          <p className="ml-[15px]">Total Likes</p>
          <h2 className="font-bold ml-[15px]">9,721</h2>
        </div>
        <div className="h-[90px] rounded-[10px] bg-[#DEE0EF] w-[170px] ml-[5px] mt-[20px]">
          <div>
            <FiUsers className="ml-[140px] mt-[15px] icon" />
          </div>
          <p className="ml-[15px]">Total Users</p>
          <h2 className="font-bold ml-[15px]">892</h2>
        </div>
      </div>
      <div className="flex Dashboard">
        <div className="basis-[70%]">
          <div className="heading">
            <h2>Activities</h2>
            <p>May-June</p>
          </div>
          <div className="Graph">
            <ResponsiveContainer aspect={3} width={1000} height={359}>
              <LineChart data={pdata} margin={{ right: 300 }}>
                <CartesianGrid />
                <XAxis dataKey="name" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line
                  type="monotoneX"
                  dataKey="Guest"
                  stroke="#E9A0A0"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotoneX"
                  dataKey="Users"
                  stroke=" #9BDD7C"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="basis-[30%]"></div>
      </div>
      <div className="subGraph">
        <div className="left">
          <h2>Top Products</h2>
          <Chart
            className="chart"
            chartType="PieChart"
            data={data}
            options={options}
            // width="255px"
            // height="255px"
          />
        </div>
        <div className="right">
          <h2>Todays schedule</h2>
          <br />
          <div className="subtitle">
            <p className="title">Meeting with suppliers from kuta Bali</p>
            <p>14.00-15.00</p>
            <p>at Sunset Road Kuta Bali</p>
          </div>

          <br />
          <div className="subtitle1">
            <p className="title">Check operation at Giga Factory 1</p>
            <p>18.00-20.00</p>
            <p>at Central Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
