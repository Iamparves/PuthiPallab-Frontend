import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import DashReviewsTable from "../../components/DashReviewsTable";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import { useStore } from "../../store";
import {
  deleteReview,
  getAllReviews,
  getMyReviews,
} from "../../utils/apiRequest";

const Reviews = () => {
  const user = useStore((state) => state.user);
  const queryClient = useQueryClient();

  const reviewsQuery = useQuery({
    queryKey: ["reviews", user.role, user._id],
    queryFn: () => {
      if (user.role === "librarian") return getAllReviews();
      return getMyReviews();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries(["reviews"]);
        return toast.success("Review deleted successfully");
      }
      toast.error(data.message);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (reviewId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the review?",
    );

    if (confirm) deleteMutation.mutate(reviewId);
  };

  return (
    <>
      <DashboardHeader
        title={`${user.role === "member" ? "My" : ""} Reviews`}
        desc="Oversee and manage reviews"
      />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {reviewsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Reviews Loading...
              </p>
            </div>
          )}
          {reviewsQuery.isError && <p>Error: {reviewsQuery.error.message}</p>}
          {!reviewsQuery.isLoading && !reviewsQuery.isError && (
            <DashReviewsTable
              data={reviewsQuery.data}
              onDelete={handleDelete}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Reviews;
