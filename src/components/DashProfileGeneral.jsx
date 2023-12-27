import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useStore } from "../store";
import { getMe, updateMe } from "../utils/apiRequest";
import UserAvatarUpload from "./UserAvatarUpload";

const DashProfileGeneral = () => {
  const [photo, setPhoto] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const userQuery = useQuery({
    queryKey: ["user", user?._id],
    queryFn: getMe,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: updateMe,
  });

  const onUpdate = (data) => {
    const toastId = toast.loading("Updating profile...");

    const updateData = { ...data, photo };

    mutation.mutate(updateData, {
      onSuccess: (data) => {
        if (data.status === "success") {
          toast.success("Profile updated successfully", { id: toastId });
          reset();
          return userQuery.refetch();
        }

        toast.error(data.message, { id: toastId });
      },
      onError: (error) => {
        toast.error(error.message, { id: toastId });
      },
    });
  };

  useEffect(() => {
    if (userQuery.data && userQuery.data.status === "success") {
      const user = userQuery.data.data.user;

      reset({
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthDate: user.birthDate
          ? new Date(user.birthDate).toISOString().split("T")[0]
          : null,
        contactNumber: user.contactNumber,
      });

      if (user.photo) setPhoto(user.photo);

      setUser(user);
    }
  }, [userQuery.data]);

  return (
    <form
      aria-disabled={isUploading || mutation.isPending}
      className="aria-disabled:pointer-events-none aria-disabled:opacity-60"
      onSubmit={handleSubmit(onUpdate)}
    >
      <div className="mx-auto max-w-md space-y-5">
        <div className="space-y-3">
          <UserAvatarUpload
            photo={photo}
            setPhoto={setPhoto}
            setIsUploading={setIsUploading}
          />
          {user?.userId && (
            <div className="flex justify-center">
              <p className="rounded-full bg-primary px-5 py-1 text-white shadow-lg shadow-primary/25">
                <span className="mr-2.5 text-white/90">User ID:</span>
                <span className="font-medium">{user.userId}</span>
              </p>
            </div>
          )}
        </div>
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
          <select
            {...register("gender")}
            id="gender"
            name="gender"
            className="block w-full cursor-pointer rounded-md border p-3 text-sm focus:outline-none sm:text-base"
          >
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
    </form>
  );
};

export default DashProfileGeneral;
