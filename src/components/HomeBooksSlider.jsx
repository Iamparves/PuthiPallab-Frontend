import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllBooks } from "../utils/apiRequest";
import BookCard from "./BookCard";
import Spinner from "./Spinner";

const HomeBooksSlider = ({ type }) => {
  const prevClass = `${type}__books-prev`;
  const nextClass = `${type}__books-next`;

  const booksQuery = useQuery({
    queryKey:
      type === "popular"
        ? ["books", { sort: "-borrowCount", limit: 12 }]
        : ["books", { limit: 12 }],
    queryFn: () =>
      getAllBooks(
        type === "popular" ? "?sort=-borrowCount&limit=12" : "?limit=12",
      ),
  });

  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            {type === "popular" ? "Popular Books" : "Newest Arrivals"}
          </h2>
          <div className="flex items-center gap-5">
            <button
              className={`__books-prev flex aspect-square w-8 items-center justify-center rounded-full bg-[#eaa451] text-white duration-200 hover:bg-primary`}
            >
              <FaChevronLeft />
            </button>
            <button
              className={`__books-next flex aspect-square w-8 items-center justify-center rounded-full bg-[#eaa451] text-white duration-200 hover:bg-primary`}
            >
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
          {!booksQuery.isLoading && !booksQuery.isError && (
            <div className="">
              <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: "__books-prev",
                  nextEl: "__books-next",
                }}
                breakpoints={{
                  640: {
                    spaceBetween: 30,
                  },
                }}
              >
                {booksQuery.data?.map((book, index) => (
                  <SwiperSlide
                    className="w-[190px] sm:w-[225px]"
                    key={type + index}
                  >
                    <BookCard book={book} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBooksSlider;
