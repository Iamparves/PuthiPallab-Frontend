import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getMe } from "../utils/apiRequest";

const DashProfileGeneral = () => {
  const [photo, setPhoto] = useState(null);
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onUpdate = (data) => {};

  useEffect(() => {
    if (userQuery.data && userQuery.data.status === "success") {
      const user = userQuery.data.data.user;

      reset({
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthDate: new Date(user.birthDate).toISOString().split("T")[0],
        contactNumber: user.contactNumber,
      });
    }
  }, [userQuery.data]);

  return (
    <div>
      <form onSubmit={handleSubmit(onUpdate)}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[auto_1fr]">
          <div className="w-52 sm:w-[240px]"></div>
          <div className="max-w-md space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              />
              {errors.name && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="pointer-events-none block w-full rounded-md border bg-gray-100/50 p-3 text-sm text-[#999] focus:outline-none sm:text-base"
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Gender
              </label>
              <select className="block w-full cursor-pointer rounded-md border p-3 text-sm focus:outline-none sm:text-base">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="birthDate"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Date of Birth
              </label>
              <input
                {...register("birthDate")}
                type="date"
                id="birthDate"
                name="birthDate"
                className="block w-full cursor-pointer rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Contact Number
              </label>
              <input
                {...register("contactNumber")}
                type="text"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your contact number"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mx-auto block w-[200px] rounded-full border-2 border-primary bg-primary p-3 text-center font-semibold text-white duration-300 hover:bg-white hover:text-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashProfileGeneral;
