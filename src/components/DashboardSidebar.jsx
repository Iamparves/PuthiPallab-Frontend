import React from "react";
import toast from "react-hot-toast";
import { FiUser, FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";
import { MdDashboard, MdOutlineReviews } from "react-icons/md";
import { TbBookOff, TbBookUpload, TbBooks, TbLogout2 } from "react-icons/tb";
import { TfiLayoutListThumb, TfiList } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";
import { logout } from "../utils/apiRequest";
import Spinner from "./Spinner";

const memberMenuItems = [
  {
    title: "Overview",
    path: "overview",
    icon: <MdDashboard />,
  },
  {
    title: "Reviews",
    path: "reviews",
    icon: <MdOutlineReviews />,
  },
];

const librarianMenuItems = [
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

const MenuLink = ({ path, title, icon, closeSidebar }) => (
  <NavLink
    to={`${path}`}
    className={
      "dashboardMenu flex items-center gap-3 border-white px-8 py-3 font-light text-[#808080] duration-300 hover:bg-[#FEF2E2] hover:text-primary sm:py-3.5 sm:text-base [&.active]:border-r-4 [&.active]:border-primary [&.active]:bg-[#FEF2E2] [&.active]:text-primary"
    }
    onClick={closeSidebar}
  >
    <span className="text-lg sm:text-xl">{icon}</span>
    <span className="text-xs sm:text-sm">{title}</span>
  </NavLink>
);

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const handleLogout = async () => {
    const result = await logout();

    if (result?.status === "success") {
      toast.success(result.message);
      return setUser(null);
    }

    toast.error("Logout failed! Please try again.");
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div
      className={`group invisible fixed left-0 top-0 z-50 h-full w-full bg-black/10 opacity-0 backdrop-blur-[2px] duration-300 lg:visible lg:static lg:opacity-100 [&.active]:visible [&.active]:opacity-100 [&.active]:duration-100 ${
        sidebarOpen ? "active" : ""
      }`}
      onClick={(e) => e.target.classList.contains("group") && closeSidebar()}
    >
      <aside className="sidebar h-full w-64 -translate-x-full bg-white duration-300 group-[&.active]:-translate-x-0 lg:w-full lg:-translate-x-0 lg:border-r lg:border-[#eee]/70">
        <div className="flex h-16 items-center overflow-hidden border-b border-[#eee]/70 px-8 sm:h-20">
          <NavLink to="/">
            <img
              className="h-10 sm:h-auto"
              src="/logo.svg"
              alt="Puthi Pallab"
            />
          </NavLink>
        </div>
        <div className="sidebarContent h-[calc(100vh-64px)] overflow-y-auto pb-5 sm:h-[calc(100vh-80px)] sm:pb-10">
          {user && (
            <>
              <p className="px-8 py-4 text-xs font-medium uppercase text-primary">
                Menu
              </p>
              <nav className="flex flex-col gap-1 sm:gap-1.5">
                {(user.role === "librarian"
                  ? librarianMenuItems
                  : memberMenuItems
                ).map(({ title, path, icon }, index) => (
                  <MenuLink
                    path={path}
                    title={title}
                    icon={icon}
                    closeSidebar={closeSidebar}
                    key={index}
                  />
                ))}
                {user.role === "librarian" && (
                  <hr className="border-gray-200/70" />
                )}
                <MenuLink
                  path="profile"
                  title="Profile"
                  icon={<FiUser />}
                  onClick={closeSidebar}
                />

                <button
                  className="flex items-center gap-3 px-8 py-3 text-[#808080] duration-300 hover:text-primary"
                  onClick={handleLogout}
                >
                  <span className="text-xl">
                    <TbLogout2 />
                  </span>
                  <span className="text-sm duration-300">Logout</span>
                </button>
              </nav>
            </>
          )}
          {!user && (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default DashboardSidebar;
