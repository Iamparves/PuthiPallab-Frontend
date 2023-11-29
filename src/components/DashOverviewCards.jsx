import React from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { PiBooks } from "react-icons/pi";
import { RiBookReadLine } from "react-icons/ri";
import { TbArrowLoopLeft2, TbUsers } from "react-icons/tb";

const OverviewCard = ({ title, desc, icon, bgColor }) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-5 py-4 sm:gap-4 ${bgColor}`}
    >
      <div className="text-2xl sm:text-3xl">{icon}</div>
      <div>
        <h2 className="text-2xl font-semibold text-[#2d2d2d] sm:text-3xl">
          {title}
        </h2>
        <p className="text-xs text-[#3d3d3d] sm:text-sm">{desc}</p>
      </div>
    </div>
  );
};

const DashOverviewCards = ({ overview }) => {
  const {
    totalBooks,
    totalUsers,
    totalIssuedBooks,
    issuedBooks,
    returnedBooks,
    totalReviews,
  } = overview;
  return (
    <div className="grid grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5 md:grid-cols-3 2xl:grid-cols-6">
      <OverviewCard
        title={totalBooks}
        desc="Total Books"
        icon={<PiBooks className="text-primary" />}
        bgColor="bg-[#FEF2E2]"
      />
      <OverviewCard
        title={totalUsers}
        desc="Total Users"
        icon={<TbUsers className="text-[#41C385]" />}
        bgColor="bg-[#E6F5EF]"
      />
      <OverviewCard
        title={totalIssuedBooks}
        desc="Total Issued"
        icon={<RiBookReadLine className="text-[#1F77FA]" />}
        bgColor="bg-[#E9F1FF]"
      />
      <OverviewCard
        title={issuedBooks}
        desc="Currently Issued"
        icon={<LuBookOpenCheck className="text-[#b92eff]" />}
        bgColor="bg-[#f7e8ff]"
      />
      <OverviewCard
        title={returnedBooks}
        desc="Returned Books"
        icon={<TbArrowLoopLeft2 className="text-[#ff2e6d]" />}
        bgColor="bg-[#ffe8ef]"
      />
      <OverviewCard
        title={totalReviews}
        desc="Total Reviews"
        icon={<MdOutlineReviews className="text-[#79ea4f]" />}
        bgColor="bg-[#eeffe8]"
      />
    </div>
  );
};

export default DashOverviewCards;
