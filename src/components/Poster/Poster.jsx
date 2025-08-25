import React from "react";

const Poster = ({ content }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center px-4 sm:px-6 lg:px-12 gap-12">
      {content.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md border border-[var(--color-secondary)] overflow-hidden md:mx-30 w-full"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-56 sm:h-65 md:h-80 lg:h-[350px] md:object-fill"
          />

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8 text-right">
            <h1 className="tajawal-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-3 text-black">
              {item.title}
            </h1>
            <p className="tajawal-regular text-sm sm:text-base md:text-lg lg:text-[18px] text-[var(--color-text)] leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Poster;
