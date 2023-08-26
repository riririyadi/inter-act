import PieChart from "../../assets/piechart.svg";

export const Revenue = () => {
  return (
    <div className="w-[205px] h-[100px] bg-[#1C243F] rounded-md flex items-center justify-center gap-5">
      <div>
        <img src={PieChart} alt="pie-chart" />
      </div>
      <div>
        <p>Revenue</p>
        <p className="text-[#6C747D] font-medium">$63,00K</p>
      </div>
    </div>
  );
};
