import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateMyPassword } from "../utils/apiRequest";

const DashProfileSecurity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: updateMyPassword,
  });

  const onUpdate = async (data) => {
    if (data.newPassword !== data.newPasswordConfirm) {
      return toast.error("New Password and Confirm New Password doesn't match");
    }

    const toastId = toast.loading("Updating password...");
    mutation.mutate(data, {
      onSuccess: (data) => {
        if (data.status === "success") {
          reset();
          return toast.success("Password updated successfully", {
            id: toastId,
          });
        }

        toast.error(data.message, { id: toastId });
      },
      onError: (error) => {
        toast.error(error.message, { id: toastId });
      },
    });
  };

  return (
    <form
      aria-disabled={mutation.isPending}
      className="aria-disabled:pointer-events-none aria-disabled:opacity-60"
      onSubmit={handleSubmit(onUpdate)}
    >
      <div className="mx-auto max-w-md space-y-5">
        <div>
          <label
            htmlFor="passwordCurrent"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Current Password
          </label>
          <input
            {...register("passwordCurrent", {
              required: "Current Password is required",
            })}
            type="password"
            id="passwordCurrent"
            name="passwordCurrent"
            placeholder="Enter current password"
            className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
          />
          {errors.passwordCurrent && (
            <span className="mt-1 block text-xs text-red-400">
              {errors.passwordCurrent.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            New Password
          </label>
          <input
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[\W_])/,
                message: "Password must include at least 1 digit and 1 symbol",
              },
            })}
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
          />
          {errors.newPassword && (
            <span className="mt-1 block text-xs text-red-400">
              {errors.newPassword.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="newPasswordConfirm"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Confirm New Password
          </label>
          <input
            {...register("newPasswordConfirm", {
              required: "Confirm Password is required",
            })}
            type="password"
            id="newPasswordConfirm"
            name="newPasswordConfirm"
            placeholder="Confirm new password"
            className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
          />
          {errors.newPasswordConfirm && (
            <span className="mt-1 block text-xs text-red-400">
              {errors.newPasswordConfirm.message}
            </span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="mx-auto block w-[200px] rounded-full border-2 border-primary bg-primary p-3 text-center font-semibold text-white duration-300 hover:bg-white hover:text-primary"
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default DashProfileSecurity;
