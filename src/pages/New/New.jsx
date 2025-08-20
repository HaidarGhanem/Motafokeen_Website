import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Poster from "../../components/Poster/Poster";
import Footer from '../../components/Footer/Footer'

const News = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("http://localhost:3000/dashboard/web/carousel");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.success) {
          // Ensure each item has { img, title, desc }
          const formattedContent = result.data.map((item) => ({
            img: item.img || `http://localhost:3000/dashboard/web/${item.id}/image`,
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
        <div className='mt-[80px]'>
            <Poster content={content} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default News;
