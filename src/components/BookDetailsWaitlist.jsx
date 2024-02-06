import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { useStore } from "../store";
import { joinWaitlist, leaveWaitlist } from "../utils/apiRequest";

const BookDetailsWaitlist = ({ waitlist, bookId }) => {
  const user = useStore((state) => state.user);
  const isAlreadyInWaitlist = waitlist?.[0]?.waitingList?.some(
    (userId) => userId === user?._id,
  );

  const queryClient = useQueryClient();

  const joinMutation = useMutation({
    mutationFn: () => joinWaitlist(bookId),
  });

  const leaveMutation = useMutation({
    mutationFn: () => leaveWaitlist(bookId),
  });

  const handleJoinWaitlist = () => {
    const toastId = toast.loading("Joining waitlist...");

    const result = joinMutation.mutate(bookId, {
      onSuccess: (data) => {
        if (data.status === "success") {
          toast.success("Successfully joined waitlist", { id: toastId });
          queryClient.invalidateQueries(["book", { bookId }]);
          return;
        }
        toast.error(data.message, { id: toastId });
      },
      onError: (error) => {
        console.log(error);
        toast.error("Something went wrong", { id: toastId });
      },
    });
  };

  const handleLeaveWaitlist = () => {
    const toastId = toast.loading("Leaving waitlist...");

    const result = leaveMutation.mutate(bookId, {
      onSuccess: (data) => {
        if (data.status === "success") {
          toast.success("Successfully left waitlist", { id: toastId });
          queryClient.invalidateQueries(["book", { bookId }]);
          return;
        }
        toast.error(data.message, { id: toastId });
      },
      onError: (error) => {
        console.log(error);
        toast.error("Something went wrong", { id: toastId });
      },
    });
  };

  return (
    <div className="mt-3 text-sm md:text-base">
      <p className="mb-3 text-gray-400">
        Waiting:{" "}
        <span className="text-primary">
          {waitlist[0]?.waitingList?.length || 0} people
        </span>
      </p>
      {user && user.role === "member" && !isAlreadyInWaitlist && (
        <button
          className="inline-block border-2 border-primary bg-primary px-4 py-2.5 font-medium text-white duration-300 hover:bg-transparent hover:text-primary"
          onClick={handleJoinWaitlist}
        >
          Join Waitlist
        </button>
      )}
      {user && user.role === "member" && isAlreadyInWaitlist && (
        <button
          className="inline-block border-2 border-primary bg-transparent px-4 py-2.5 font-medium text-primary duration-300 hover:bg-primary hover:text-white"
          onClick={handleLeaveWaitlist}
        >
          Leave Waitlist
        </button>
      )}
    </div>
  );
};

export default BookDetailsWaitlist;
