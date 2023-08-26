import HomeLogo from "../assets/home.svg";
import ReportLogo from "../assets/reports.svg";
import NotificationLogo from "../assets/notification.svg";
import SettingLogo from "../assets/setting.svg";
import LogoutLogo from "../assets/logout.svg";
import Logo from "../assets/Vector.svg";

const sideNavMenus = [
  {
    name: "Home",
    logo: HomeLogo,
  },
  {
    name: "Reports",
    logo: ReportLogo,
  },
  {
    name: "Notifications",
    logo: NotificationLogo,
  },
  {
    name: "Settings",
    logo: SettingLogo,
  },
  {
    name: "Logout",
    logo: LogoutLogo,
  },
];
export const Sidebar = () => {
  return (
    <aside className="w-[280px] h-screen bg-[#171E37] p-5 text-white">
      <div className="flex items-center mb-[62px]">
        <img src={Logo} alt="logo" />
        <h1 className="font-bold ml-2">Inter-act</h1>
      </div>
      <div>
        <ul className="text-[#6C747D] text-[16px]">
          {sideNavMenus.map((menu) => (
            <li
              className={`h-[48px] flex items-center ${
                menu.name === "Home" && "bg-[#1F2849]"
              } rounded-lg p-3 mb-2`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex">
                  <img src={menu.logo} alt="home" className="mr-3" />{" "}
                  {menu.name}{" "}
                </div>
                <div>
                  {menu.name === "Notifications" && (
                    <span className="bg-[#98FFE0] py-[1px] px-[5px] rounded-[5px] text-[12px] ">
                      1
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
