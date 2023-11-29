import React from "react";
import { MdLockOutline, MdOutlinePersonOutline } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";

const styles = {
  link: "flex flex-col items-center gap-1 border-b-2 border-white duration-300 hover:border-primary text-[#808080] hover:bg-[#FEF2E2] px-5 pb-2 pt-2.5 text-sm sm:text-base hover:text-primary [&.active]:border-primary [&.active]:text-primary [&.active]:bg-[#FEF2E2]",
};

const Profile = () => {
  return (
    <>
      <DashboardHeader
        title="Profile"
        desc="Manage your profile effortlessly"
      />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200/70 bg-white">
          <div className="flex gap-0.5 border-b border-gray-200/70">
            <NavLink className={styles.link} to="/dashboard/profile/general">
              <span className="text-xl">
                <MdOutlinePersonOutline />
              </span>
              General
            </NavLink>
            <NavLink className={styles.link} to="/dashboard/profile/security">
              <span className="text-xl">
                <MdLockOutline />
              </span>
              Security
            </NavLink>
          </div>
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
