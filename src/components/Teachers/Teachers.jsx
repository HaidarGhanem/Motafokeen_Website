import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TeachersCarousel() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // unified photo
  const teacherPhoto = "/default-teacher.png";

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://localhost:3000/dashboard/teachers");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          const simplified = result.data.map((t) => ({
            id: t.id,
            name: t.name,
            subject: t.subject,
          }));
          setTeachers(simplified);
        } else {
          throw new Error(result.message || "Failed to load teachers");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-pulse text-[var(--color-text)]">
          جاري تحميل المعلمين...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>خطأ في تحميل البيانات</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (teachers.length === 0) {
    return (
      <div className="text-center py-8 text-[var(--color-text)]">
        لا يوجد معلمين حالياً
      </div>
    );
  }

  return (
    <div className="mt-[80px] w-full px-4 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5} // 🔹 smaller gap between cards
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-12"
      >
        {teachers.map((t) => (
          <SwiperSlide key={t.id} className="flex justify-center">
            <div className="main_card w-[95%] max-w-[350px] rounded-[20px] flex flex-col items-center bg-white shadow-md transition-all duration-300 hover:scale-105">
              {/* image */}
              <div className="w-full h-[230px] overflow-hidden rounded-t-[20px] bg-gray-300 flex items-center justify-center">
                <img
                  src={teacherPhoto}
                  alt={t.name}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              {/* content */}
              <div className="flex flex-col justify-center text-center p-4">
                <h3 className="tajawal-bold text-[18px]">{t.name}</h3>
                <p className="tajawal-regular text-gray-600 text-[15px] mt-1">
                  {t.subject}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* navigation */}
        <div className="swiper-button-next !hidden md:!flex"></div>
        <div className="swiper-button-prev !hidden md:!flex"></div>
      </Swiper>

      {/* Custom Swiper styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--color-primary) !important;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: white;
          transform: scale(1.1);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
