import { TotalCost } from "../components/sections/TotalCost";
import { TotalSales } from "../components/sections/TotalSales";
import { ThisWeek } from "../components/sections/ThisWeek";
import { Revenue } from "../components/sections/Revenue";
import { LastPayment } from "../components/sections/LastPayment";
import { EarningsChart } from "../components/sections/EarningsChart";
import { OrdersChart } from "../components/sections/OrdersChart";
import { ProfitChart } from "../components/sections/ProfitChart";
import { TotalProfit } from "../components/sections/TotalProfit";
import { ActivityOverview } from "../components/sections/ActivityOverview";
import { Footer } from "../components/Footer";

export const Homepage = () => {
  return (
    <main className="bg-[#151A2E] h-[calc(100vh-60px)] pt-[45px] pl-8 text-white text-[30px] font-semibold overflow-auto">
      <h1>Marketing Dashboard</h1>
      <p className=" text-[12px] font-medium">
        <span className="text-[#6C747D]">Home / </span>{" "}
        <span className="text-[#0BB885]">Dashboard</span>
      </p>
      <div className="flex mr-8 mt-8 text-base gap-8">
        <TotalCost />
        <TotalSales />
        <ThisWeek />
        <Revenue />
        <LastPayment />
      </div>
      <div className="flex text-base mt-8 mr-8 gap-8">
        <div>
          <div className="flex gap-5">
            <EarningsChart />
            <OrdersChart />
            <ProfitChart />
          </div>
          <TotalProfit />
        </div>
        <ActivityOverview />
      </div>
      <Footer />
    </main>
  );
};
