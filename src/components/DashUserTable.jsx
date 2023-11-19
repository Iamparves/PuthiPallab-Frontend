import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineSearch } from "react-icons/hi";
import { useStore } from "../store";
import { updateUserRole } from "../utils/apiRequest";
import TanstackTable from "./TanstackTable";

const DashUserTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const user = useStore((state) => state.user);
  const queryClient = useQueryClient();

  const handleRoleChange = async (e, id) => {
    const role = e.target.value;

    const confirm = window.confirm("Are you sure you want to change the role?");
    if (!confirm) return;

    const result = await updateUserRole(id, { role });

    if (result.status === "success") {
      queryClient.invalidateQueries(["users"]);
      return toast.success(`User successfully updated to ${role}`);
    }

    toast.error("User role change failed!");
  };

  const columns = [
    {
      accessorKey: "userId",
      header: "User ID",
    },
    {
      accessorKey: "photo",
      header: "Avatar",
      cell: (props) => {
        const avatar =
          props.getValue() ||
          "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png";

        return (
          <img
            src={avatar}
            alt=""
            className="aspect-square w-12 rounded-full object-cover"
          />
        );
      },
    },
    {
      accessorKey: "name",
      header: "Fullname",
    },
    {
      accessorKey: "email",
      header: "Email Address",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorFn: (row) =>
        JSON.stringify({
          id: row._id,
          role: row.role,
        }),
      header: "Role",
      cell: (props) => {
        const { id, role } = JSON.parse(props.getValue());

        return (
          <select
            className={`w-28 cursor-pointer rounded-lg  px-1 py-1.5 focus:outline-none disabled:cursor-default disabled:opacity-70 ${
              role === "member"
                ? "bg-[#E7E9EF] text-[#142764]"
                : "bg-[#FEF2E2] text-primary"
            }`}
            name="role"
            defaultValue={role}
            onChange={(e) => handleRoleChange(e, id)}
            disabled={user._id === id}
          >
            <option value="member">Member</option>
            <option value="librarian">Librarian</option>
          </select>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3">
        <h2 className="text-xl font-semibold text-[#1d1d1d]">Users List</h2>
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Search"
            className="block w-60 rounded-xl border-2 border-gray-200/70 px-3 py-2 pl-8 placeholder:text-[#bbb] focus:outline-none"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
            <HiOutlineSearch />
          </span>
        </div>
      </div>
      <TanstackTable
        data={data}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        pageSize={10}
      />
    </div>
  );
};

export default DashUserTable;
