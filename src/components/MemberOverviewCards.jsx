import React from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { PiBooks, PiMoneyLight } from "react-icons/pi";
import { RiBookReadLine } from "react-icons/ri";
import { TbArrowLoopLeft2 } from "react-icons/tb";
import OverviewCard from "./OverviewCard";

const MemberOverviewCards = ({ overview }) => {
  const {
    totalBorrowed,
    totalReviews,
    currentlyBorrowed,
    totalReturned,
    delayedBooks,
    totalFinePaid,
  } = overview || {};

  return (
    <div className="grid grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5 md:grid-cols-3 2xl:grid-cols-6">
      <OverviewCard
        title={totalBorrowed}
        desc="Books Borrowed"
        icon={<PiBooks className="text-primary" />}
        bgColor="bg-[#FEF2E2]"
      />
      <OverviewCard
        title={totalReturned}
        desc="Books Returned"
        icon={<TbArrowLoopLeft2 className="text-[#41C385]" />}
        bgColor="bg-[#E6F5EF]"
      />
      <OverviewCard
        title={currentlyBorrowed}
        desc="Books On Loan"
        icon={<RiBookReadLine className="text-[#1F77FA]" />}
        bgColor="bg-[#E9F1FF]"
      />
      <OverviewCard
        title={delayedBooks}
        desc="Delayed Books"
        icon={<LuBookOpenCheck className="text-[#b92eff]" />}
        bgColor="bg-[#f7e8ff]"
      />
      <OverviewCard
        title={totalReviews}
        desc="Reviews Given"
        icon={<MdOutlineReviews className="text-[#79ea4f]" />}
        bgColor="bg-[#eeffe8]"
      />
      <OverviewCard
        title={`৳${totalFinePaid}`}
        desc="Fine Paid"
        icon={<PiMoneyLight className="text-[#ff2e6d]" />}
        bgColor="bg-[#ffe8ef]"
      />
    </div>
  );
};

export default MemberOverviewCards;
