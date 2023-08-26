import Trophy from "../../assets/trophy.svg";

export const TotalSales = () => {
  return (
    <div className="w-[205px] h-[100px] bg-[#1C243F] rounded-md flex items-center justify-center gap-5">
      <div>
        <img src={Trophy} alt="trophy" />
      </div>
      <div>
        <div>Total Sales</div>
        <div className="text-[#6C747D] font-medium">$68,053</div>
      </div>
    </div>
  );
};
