import ArrowUp from "../../assets/arrow-up.svg";
import parse from "html-react-parser";

const activities = [
  {
    caption: `Nick Mark <span className="font-normal">Mentioned</span> Sara
    Smith <span className="font-normal">In New Post</span>`,
    creationDate: "11 JUL 8:10 PM",
  },
  {
    caption: ` <span className="font-normal">The </span>Post Name
    <span className="font-normal">was removed by </span>Nick Mark`,
    creationDate: "1 JUL 9:10 PM",
  },
  {
    caption: ` Patrick Sulliven
    <span className="font-normal">Published a New Post</span>`,
    creationDate: "12 JUL 10:10 PM",
  },
  {
    caption: ` 240+ users <span className="font-normal">
      have subscribed to Newsletter #1
    </span>`,
    creationDate: "18 JUL 19:10 PM",
  },
  {
    caption: ` <span className="font-normal">The </span>Post Name
    <span className="font-normal">was suspanded by </span>
    Nick Mark`,
    creationDate: "11 JUL 9:10 PM",
  },
];

type ActivityType = { caption: string; creationDate: string };
type ActivityListType = ActivityType[];

const Activity = ({ activity }: { activity: ActivityType }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center justify-start">
        <div className="w-[21px] h-[21px] border-2 border-[#FF814A] rounded-full"></div>
        <div className="border-l border-[#5C6CA5] h-[72px]"></div>
      </div>
      <div>
        <p className="text-[#D3D3D3] ">{parse(activity.caption)}</p>
        <p className="text-[#9F9F9F] font-normal">{activity.creationDate}</p>
      </div>
    </div>
  );
};

const ActivityList = ({ activities }: { activities: ActivityListType }) => {
  return (
    <>
      {activities.map((act) => (
        <Activity activity={act} />
      ))}
    </>
  );
};

export const ActivityOverview = () => {
  return (
    <div className="w-[440px] bg-[#1C243F] rounded-md flex px-[18px] py-[18px]">
      <div>
        <div className="font-semibold text-[20px]">Activity overview</div>
        <div className="flex font-thin mt-2 text-[16px] text-white">
          <img src={ArrowUp} alt="arrow-up" className="mr-2" /> 16% this month
        </div>
        <div className="mt-6">
          <ActivityList activities={activities} />
        </div>
      </div>
    </div>
  );
};
