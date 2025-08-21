import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/dashboard/web/carousel");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        if (result.success) {
          const postsWithImages = result.data.map((post) => ({
            ...post,
            img: post.img || `http://localhost:3000/dashboard/web/${post.id}/image`,
          }));
          setPosts(postsWithImages);
        } else {
          throw new Error(result.message || "Failed to load posts");
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-[var(--color-text)]">
          جاري تحميل المنشورات...
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

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-[var(--color-text)]">
        لا توجد منشورات متاحة حالياً
      </div>
    );
  }

  return (
    <div className="mt-[80px] w-full px-4 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        initialSlide={0}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onInit={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setSlidesPerView(swiper.params.slidesPerView);
        }}
        onResize={(swiper) => setSlidesPerView(swiper.params.slidesPerView)}
        breakpoints={{
          640: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: false },
        }}
        className="!pb-20 max-w-[395px] md:max-w-full"
      >
        {posts.map((item, index) => {
          // 👇 logic to detect the "middle" card
          const middleIndex = activeIndex + Math.floor(slidesPerView / 2);
          const isCenter = index === middleIndex;

          return (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div
                className={`main_card w-[95%] max-w-[395px] rounded-[20px] flex flex-col justify-between items-center bg-white shadow-md transition-all duration-300 ${
                  isCenter
                    ? "h-[460px] scale-98 md:h-[503px] md:scale-98"
                    : "h-[460px] scale-85 md:h-[432px] md:scale-90"
                }`}
              >
                {/* Image */}
                <div className="w-full h-[240px] overflow-hidden rounded-t-[20px] bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-post-image.png";
                      e.target.className =
                        "w-full h-full object-contain p-4 bg-gray-200";
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-start text-right p-4 w-full h-[calc(100%-240px)]">
                  <h3
                    className={`tajawal-bold line-clamp-2 ${
                      isCenter ? "text-[24px]" : "text-[20px]"
                    } mb-2`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`tajawal-regular text-gray-600 line-clamp-3 ${
                      isCenter ? "text-[18px]" : "text-[16px]"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-4 w-full">
                    <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                      <p className="tajawal-regular text-gray-500 text-sm">
                        {item.writer}
                      </p>
                      <div className="flex items-center gap-2">
                        <CiCalendar
                          className={`${
                            isCenter ? "w-6 h-6" : "w-5 h-5"
                          } text-gray-500`}
                        />
                        <span
                          className={`tajawal-regular text-gray-500 ${
                            isCenter ? "text-[16px]" : "text-[14px]"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* Navigation buttons */}
        <div className="swiper-button-next !hidden md:!flex"></div>
        <div className="swiper-button-prev !hidden md:!flex"></div>
      </Swiper>

      {/* Load more button */}
      <div className="flex justify-center mt-12 mb-8">
        <Link
          to="/news"
          className="px-8 py-3 rounded-lg text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors duration-300 tajawal-bold text-lg shadow-md hover:shadow-lg"
        >
          عرض المزيد من الأخبار
        </Link>
      </div>

      {/* Custom Swiper styles */}
      <style jsx global>{`
        .custom-bullet {
          background-color: #d1d5db;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background-color: var(--color-primary) !important;
          width: 30px;
          height: 10px;
          border-radius: 5px;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--color-primary) !important;
          background: rgba(255, 255, 255, 0.9);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: white;
          transform: scale(1.1);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
