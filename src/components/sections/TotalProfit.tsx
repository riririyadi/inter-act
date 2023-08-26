import Path from "../../assets/balance-path.svg";
import TotalOrderChart from "../../assets/total-order-chart.svg";

export const TotalProfit = () => {
  return (
    <div className="w-full bg-[#1C243F] rounded-md flex mt-5">
      <div className="w-2/3 border-r-[1px] border-[#2E4B85] p-5 py-8">
        <div className="flex justify-between items-center mb-5">
          <div>Total Profit</div>
          <div className="flex  justify-between items-center font-thin text-[#828282] text-[12px]">
            <div className="flex items-center mr-4 ">
              <div className="h-[10px] w-[10px] bg-[#0BB885] rounded-full mr-2"></div>
              Earning
            </div>
            <div className="flex items-center">
              <div className="h-[10px] w-[10px] bg-[#FF9F43] rounded-full mr-2"></div>
              Expense
            </div>
          </div>
        </div>
        <img src={TotalOrderChart} alt="total-order" />
      </div>
      <div className="w-1/3 p-5 py-8">
        <div className="flex w-full h-full flex-col items-center justify-between">
          <select
            className="bg-[#1C243F] text-[#0BB885] border-[1px] border-[#0BB885] rounded-[5px] text-[10px] px-2 py-1"
            disabled
          >
            <option>2023</option>
          </select>
          <div>
            <p className="text-[32px]">$842.98</p>
            <p className="text-[9px] font-normal text-[#828282]">
              Last Month Balance $426.20k
            </p>
          </div>
          <img src={Path} alt="balance-path" />
          <button className="bg-[#0BB885] px-[20px] py-[9px] rounded-md">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
};
