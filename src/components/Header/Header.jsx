import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({img , title ,desc}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="relative overflow-hidden w-full"
      style={{
        backgroundImage: `${img}`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxHeight: "700px",
        minHeight: "500px",
        borderBottomLeftRadius: "clamp(40px, 6vw, 120px)",
        borderBottomRightRadius: "clamp(40px, 6vw, 120px)",
      }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-around px-4 sm:px-6 py-4 md:py-6 relative z-20">
        {/* Logo */}
       

        {/* Desktop Menu */}
        <div className="hidden md:flex tajawal-medium text-white text-base lg:text-[20px]">
          <ul className="flex gap-4 lg:gap-8">
            {[
              { href: "/", label: "الرئيسية" },
              { href: "/activity", label: "النشاطات" },
              { href: "/news", label: "الأخبار والإعلانات" },
              { href: "/join", label: "انضم إلينا" },
              { href: "/about", label: "عن المدرسة" },
            ].map(({ href, label }) => (
              <li
                key={href}
                className="nav-link text-white hover:text-[var(--color-secondary)] transition-colors duration-200"
              >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

         <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <div className="tajawal-bold flex flex-col items-end leading-tight">
            <h1 className="text-[var(--color-primary)] text-lg sm:text-xl md:text-2xl lg:text-[28px]">
              مدرسة
            </h1>
            <h1 className="text-[var(--color-secondary)] text-lg sm:text-xl md:text-2xl lg:text-[28px]">
              المتفوقين
            </h1>
          </div>
          <img
            src="/Logo.svg"
            alt="School Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-[78px] md:w-[78px]"
          />
        </div>
      </nav>

      {/* Mobile Dropdown */}
{isMenuOpen && (
  <div className="fixed inset-0 bg-[rgba(0,0,0,0.95)] text-white tajawal-medium text-lg flex flex-col items-center justify-center gap-8 z-50 md:hidden">
    {/* Close Button */}
    <button
      onClick={toggleMenu}
      className="absolute top-6 right-6 text-3xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
      aria-label="إغلاق القائمة"
    >
      <FiX />
    </button>

    {/* Menu Links */}
    <ul className="flex flex-col items-center gap-6">
      {[
        { href: "/", label: "الرئيسية" },
        { href: "/activity", label: "النشاطات" },
        { href: "/news", label: "الأخبار والإعلانات" },
        { href: "/join", label: "انضم إلينا" },
        { href: "/about", label: "عن المدرسة" },
      ].map(({ href, label }) => (
        <li
          key={href}
          onClick={toggleMenu}
          className="nav-link hover:text-[var(--color-secondary)] transition-colors duration-200"
        >
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </div>
)}

      {/* Hero Section */}
      <div className="mt-20 px-4 sm:px-6 lg:px-20 flex flex-col justify-end items-end relative z-0 pb-8 md:pb-16 md:mt-[60px]">
        <div className="tajawal-bold text-[var(--color-secondary)] text-xl sm:text-2xl md:text-4xl lg:text-[48px] text-right mb-4 leading-snug max-w-full md:max-w-3xl">
          {`${title}`}
        </div>
        <div className="tajawal-regular text-[var(--color-secondary)] text-sm sm:text-base md:text-xl lg:text-[32px] w-full sm:max-w-lg md:max-w-2xl text-right leading-relaxed">
         {`${desc}`}
        </div>
      </div>
    </header>
  );
};

export default Header;
