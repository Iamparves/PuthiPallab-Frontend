import React from "react";
import { FiUser, FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";
import { MdDashboard, MdOutlineReviews } from "react-icons/md";
import { TbBookOff, TbBookUpload, TbBooks } from "react-icons/tb";
import { TfiLayoutListThumb, TfiList } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Overview",
    path: "overview",
    icon: <MdDashboard />,
  },
  {
    title: "Manage Books",
    path: "books",
    icon: <TbBooks />,
  },
  {
    title: "Manage Genres",
    path: "genres",
    icon: <TfiList />,
  },
  {
    title: "Issue Book",
    path: "issue-book",
    icon: <TbBookUpload />,
  },
  {
    title: "Return Book",
    path: "return-book",
    icon: <TbBookOff />,
  },
  {
    title: "Issue Records",
    path: "records",
    icon: <TfiLayoutListThumb />,
  },
  {
    title: "Manage Users",
    path: "users",
    icon: <FiUsers />,
  },
  {
    title: "Waitlist",
    path: "waitlist",
    icon: <LuFileClock />,
  },
  {
    title: "Manage Reviews",
    path: "reviews",
    icon: <MdOutlineReviews />,
  },
  {
    title: "Profile",
    path: "profile",
    icon: <FiUser />,
  },
];

const DashboardSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="h-full border-r border-[#eee]/70 bg-white">
      <div className="flex h-20 items-center border-b border-[#eee]/70 px-8">
        <Link to="/">
          <img className="" src="/logo.svg" alt="Puthi Pallab" />
        </Link>
      </div>
      <div className="px-8 py-8">
        <nav className="flex flex-col gap-1">
          {menuItems.map(({ title, path, icon }, index) => {
            const activeLink = pathname.split("/").slice(-1)[0] === path;

            return (
              <Link
                key={index}
                to={`../${path}`}
                className={`flex items-center gap-3 rounded-xl p-3 ${
                  activeLink
                    ? "bg-[#F59115] text-white"
                    : "text-[#333] duration-300 hover:bg-[#F59115] hover:text-white"
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span className="text-sm">{title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
