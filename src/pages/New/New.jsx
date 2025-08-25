import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Poster from "../../components/Poster/Poster";
import Footer from '../../components/Footer/Footer';

const News = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("https://backend-motafokeen-ajrd.onrender.com/dashboard/web/carousel");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.success) {
          const formattedContent = result.data.map((item) => ({
            img: item.img || `https://backend-motafokeen-ajrd.onrender.com/dashboard/web/${item.id}/image`,
            title: item.title || "بدون عنوان",
            content: item.description || "لا يوجد وصف متاح",
          }));

          setContent(formattedContent);
        } else {
          throw new Error(result.message || "Failed to load content");
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Get current posts for the page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = content.slice(indexOfFirstPost, indexOfLastPost);

  // total pages
  const totalPages = Math.ceil(content.length / postsPerPage);

  return (
    <>
      <Header title="" desc="" img="url('/news.png')" />
      <Title
        title="الأخبار والإعلانات"
        desc="تابع آخر أخبار المدرسة والإعلانات المُهمَّة والفعاليات القادمة."
      />

      {loading ? (
        <p className="text-center tajawal-regular text-lg text-gray-500">
          جاري التحميل...
        </p>
      ) : error ? (
        <p className="text-center tajawal-regular text-lg text-red-500">
          {error}
        </p>
      ) : (
        <div className="mt-[80px]">
          <Poster content={currentPosts} />

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-lg border text-sm tajawal-regular
                         disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-200 transition"
            >
              السابق
            </button>

            {/* Page numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-lg border text-sm tajawal-regular
                  ${currentPage === index + 1 ? "bg-[var(--color-primary)] text-white" : "hover:bg-gray-200"}
                `}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-lg border text-sm tajawal-regular
                         disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-200 transition"
            >
              التالي
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default News;
