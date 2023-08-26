import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const earnings = [
  {
    totalSales: "251K",
    totalOrder: "176K",
  },
  {
    totalSales: "165K",
    totalOrder: "147K",
  },
];

export const EarningsChart = () => {
  const [timeId, setTimeId] = useState(0);

  return (
    <div className="w-[320px] h-[220px] bg-[#1C243F] rounded-md p-5">
      <div className="flex justify-between items-center">
        <div>Earnings</div>
        <select
          className="bg-[#1C243F] text-[#2E4B85] rounded-[5px] text-[10px] px-2 py-1"
          value={timeId}
          onChange={(e) => setTimeId(parseInt(e.target.value))}
        >
          <option value="0">Last Week</option>
          <option value="1">2 Weeks Ago</option>
          <option value="1">Last Month</option>
        </select>
      </div>
      <div className="flex mt-5">
        <div className="relative ">
          <div className="w-[142px] h-[142px] ">
            <CircularProgressbar
              value={timeId == 1 ? 50 : 76}
              strokeWidth={9}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                // rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#0BB885`,

                trailColor: "#1F2849",
              })}
            />
          </div>
          <div className="w-[100px] h-[100px] mt-2 absolute top-[13px] left-[22px]">
            <CircularProgressbar
              value={timeId == 1 ? 45 : 52}
              strokeWidth={12}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                // rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#FF814A`,

                trailColor: "#1F2849",
              })}
            />
          </div>
        </div>
        <div className="p-4 py-1">
          <div className="flex items-center">
            <div className="h-[10px] w-[10px] bg-[#0BB885] rounded-full mr-2"></div>
            <div className="ml-2">
              <p className="font-light text-[12px]">Total Sales</p>
              <p className="text-[#8A92A6] font-normal mt-1">
                {earnings[timeId].totalSales}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <div className="h-[10px] w-[10px] bg-[#FF814A] rounded-full mr-2"></div>
            <div className="ml-2">
              <p className="font-light text-[12px]">Total Orders</p>
              <p className="text-[#8A92A6] font-normal mt-1">
                {earnings[timeId].totalOrder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
