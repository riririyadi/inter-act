import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const TotalCost = () => {
  return (
    <div className="w-[205px] h-[100px] bg-[#0BB885] rounded-md flex items-center justify-center gap-5 text-white">
      <div className="w-[60px] h-[60px] relative">
        <CircularProgressbar
          value={50}
          strokeWidth={7}
          styles={buildStyles({
            rotation: 0.65,
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `#fff`,
            trailColor: "#0BB885",
          })}
        />
        <div className="w-[46px] h-[46px] rounded-full bg-white absolute top-[6px] left-[7px] opacity-20"></div>
      </div>
      <div>
        <p>Total Cost</p>
        <p>$31,868</p>
      </div>
    </div>
  );
};
