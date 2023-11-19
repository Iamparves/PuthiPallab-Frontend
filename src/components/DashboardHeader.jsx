import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";

const DashboardHeader = ({ title, desc }) => {
  const { name, photo } = useStore((state) => state.user);
  const nameInitials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex h-20 items-center justify-between border-b border-[#eee]/70 bg-white px-10">
      <div className="">
        <h1 className="mb-0.5 text-xl font-semibold text-[#1d1d1d]">{title}</h1>
        <p className="text-sm font-light text-gray-400">{desc}</p>
      </div>
      <Link to="../profile" className="group flex items-center gap-2">
        <div className="aspect-square w-11 overflow-hidden rounded-full bg-gray-100">
          <img
            src={
              photo
                ? photo
                : "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
            }
            className="h-full w-full object-cover"
            alt={name}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium leading-tight text-[#1d1d1d]">
            {name.split(" ")[0]}
          </h4>
          <p className="text-xs text-primary group-hover:underline">
            Visit Profile
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DashboardHeader;
