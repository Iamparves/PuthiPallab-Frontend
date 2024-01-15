import React from 'react';

const ServiceCard = ({ service }) => {
  const { img, title, description } = service;

  return (
    <div className="border-[#ebebeb] bg-white px-10 py-20 duration-300 sm:py-5 md:hover:scale-[calc(101%)] md:hover:border-transparent md:hover:shadow-[0_0_20px_0_rgba(0,0,0,0.03)] xl:py-12 [&:not(:last-child)]:border-b md:[&:not(:nth-child(3n))]:border-r sm:[&:nth-child(2n-1)]:border-r md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(4)]:border-b-0 sm:[&:nth-child(5)]:border-b-0">
      <div className="mx-auto max-w-[300px] text-center sm:text-left">
        <span className="mx-auto inline-block w-full aspect-square sm:mx-0">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </span>
        <p className="text-[20px] text-gray-500 sm:text-base mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
