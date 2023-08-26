import Calendar from "../../assets/calendar.svg";

export const ThisWeek = () => {
  return (
    <div className="w-[205px] h-[100px] bg-[#1C243F] rounded-md flex items-center justify-center gap-5">
      <div>
        <img src={Calendar} alt="calendar" />
      </div>
      <div>
        <p>This Week</p>
        <p className="text-[#6C747D] font-medium">$35,000,00</p>
      </div>
    </div>
  );
};
