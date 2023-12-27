import React from "react";

const steps = [
  {
    title: "Discover Books",
    description:
      "Discover, browse, and check book availability in our rich and diverse catalog.",
    icon: "/about-us/discover-books.png",
  },
  {
    title: "Visit Our Library",
    description:
      "Check our operating hours, plan your visit, and get ready for a captivating literary adventure.",
    icon: "/about-us/visit-library.png",
  },
  {
    title: "Borrow Books",
    description:
      "Select your favorite reads and effortlessly borrow them from our friendly and helpful staff.",
    icon: "/about-us/borrow-books.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#F6F7FB] py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {steps.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 rounded-md bg-white px-5 py-6 text-center shadow-sm xl:flex-row xl:py-8 xl:text-left"
            >
              <span className="absolute bottom-[-25px] right-[-10px] z-0 hidden text-9xl font-bold leading-none text-[#F6F7FB] xl:block">
                {index + 1}
              </span>
              <div className="z-10 aspect-square h-16">
                <img
                  src={icon}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="z-10">
                <h3 className="mb-3 text-xl font-semibold text-[#151515]">
                  {title}
                </h3>
                <p className="text-[15px] text-[#777]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
