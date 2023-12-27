import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllBooks } from "../utils/apiRequest";
import BookCard from "./BookCard";
import Spinner from "./Spinner";

const NewestArrivals = () => {
  const booksQuery = useQuery({
    queryKey: ["books", { limit: 12 }],
    queryFn: () => getAllBooks("?limit=12"),
  });

  return (
    <section className="bg-[#F8F8F8] py-16 sm:py-20">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Newest Arrivals
          </h2>
          <div className="flex items-center gap-5">
            <button className="newest__book-prev flex aspect-square w-8 items-center justify-center rounded-full bg-[#eaa451] text-white duration-200 hover:bg-primary">
              <FaChevronLeft />
            </button>
            <button className="newest__book-next flex aspect-square w-8 items-center justify-center rounded-full bg-[#eaa451] text-white duration-200 hover:bg-primary">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="mt-10">
          {booksQuery.isLoading && (
            <div className="flex flex-col items-center gap-2 pt-10 text-center">
              <Spinner />
              <p className="text-gray-400">Books Loading...</p>
            </div>
          )}
          {booksQuery.isSuccess && booksQuery.data?.length === 0 && (
            <div className="pt-10 text-center">
              <p className="text-gray-400">No books found</p>
            </div>
          )}
          {!booksQuery.isLoading && !booksQuery.isError && (
            <div className="">
              <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: ".newest__book-prev",
                  nextEl: ".newest__book-next",
                }}
                breakpoints={{
                  640: {
                    spaceBetween: 30,
                  },
                }}
              >
                {booksQuery.data?.map((book, index) => (
                  <SwiperSlide className="w-[190px] sm:w-[225px]" key={index}>
                    <BookCard book={book} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
        {booksQuery.isSuccess && booksQuery.data?.length > 0 && (
          <div className="mt-10 text-center">
            <Link
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-5 py-3.5 text-sm font-semibold uppercase text-white duration-300 hover:bg-transparent hover:text-primary sm:text-base"
              to="/books"
            >
              View all Books <FaChevronRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewestArrivals;
