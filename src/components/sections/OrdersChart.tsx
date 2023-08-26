import OrderChart from "../../assets/order-chart.svg";

export const OrdersChart = () => {
  return (
    <div className="w-[162px] h-[220px] bg-[#1C243F]  rounded-md flex  justify-center px-[18px] py-[18px]">
      <div>
        <div className="font-medium">Orders</div>
        <div className="font-medium mt-2 text-xl text-[#FF814A]">189k</div>
        <img src={OrderChart} alt="order-chart" className="mt-10" />
      </div>
    </div>
  );
};
