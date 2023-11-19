import React from "react";
import toast from "react-hot-toast";
import { FiUser, FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";
import { MdDashboard, MdOutlineReviews } from "react-icons/md";
import { TbBookOff, TbBookUpload, TbBooks, TbLogout2 } from "react-icons/tb";
import { TfiLayoutListThumb, TfiList } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store";
import { logout } from "../utils/apiRequest";

const menuItems = [
  {
    title: "Overview",
    path: "overview",
    icon: <MdDashboard />,
  },
  {
    title: "Books",
    path: "books",
    icon: <TbBooks />,
  },
  {
    title: "Genres",
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
    path: "issue-records",
    icon: <TfiLayoutListThumb />,
  },
  {
    title: "Users",
    path: "users",
    icon: <FiUsers />,
  },
  {
    title: "Waitlist",
    path: "waitlist",
    icon: <LuFileClock />,
  },
  {
    title: "Reviews",
    path: "reviews",
    icon: <MdOutlineReviews />,
  },
];

const MenuLink = ({ path, title, icon, isActive }) => (
  <Link
    to={`../${path}`}
    className={`dashboardMenu flex items-center gap-3 px-8 py-3.5 font-light ${
      isActive
        ? "text-primary border-primary border-r-4 bg-[#FEF2E2]"
        : "hover:text-primary border-white text-[#808080] duration-300 hover:bg-[#FEF2E2]"
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm">{title}</span>
  </Link>
);

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  const setUser = useStore((state) => state.setUser);

  const handleLogout = async () => {
    const result = await logout();

    if (result?.status === "success") {
      toast.success(result.message);
      return setUser(null);
    }

    toast.error("Logout failed! Please try again.");
  };

  return (
    <aside className="h-full border-r border-[#eee]/70 bg-white">
      <div className="flex h-20 items-center border-b border-[#eee]/70 px-8">
        <Link to="/">
          <img className="" src="/logo.svg" alt="Puthi Pallab" />
        </Link>
      </div>
      <div>
        <p className="text-primary px-8 py-4 text-xs font-medium uppercase">
          Menu
        </p>
        <nav className="flex flex-col gap-1.5">
          {menuItems.map(({ title, path, icon }, index) => {
            const isActive = pathname.split("/").slice(-1)[0] === path;
            return (
              <MenuLink
                path={path}
                title={title}
                icon={icon}
                isActive={isActive}
                key={index}
              />
            );
          })}
          <hr className="border-gray-200/70" />
          <MenuLink
            path="profile"
            title="Profile"
            icon={<FiUser />}
            isActive={pathname.split("/").slice(-1)[0] === "profile"}
          />

          <button
            className="hover:text-primary flex items-center gap-3 px-8 py-3 text-[#808080] duration-300"
            onClick={handleLogout}
          >
            <span className="text-xl">
              <TbLogout2 />
            </span>
            <span className="text-sm duration-300">Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
