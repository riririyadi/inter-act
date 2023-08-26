import Profitchart from "../../assets/profit-chart.svg";

export const ProfitChart = () => {
  return (
    <div className="w-[162px] h-[220px] bg-[#1C243F]  rounded-md flex justify-center px-[18px] py-[18px]">
      <div>
        <div className="font-medium">Profit</div>
        <div className="font-medium mt-2 text-xl text-[#0BB885]">8,24k</div>
        <img src={Profitchart} alt="profit-chart" className="mt-6" />
      </div>
    </div>
  );
};
