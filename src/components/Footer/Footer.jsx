
const Footer = () => {
    return (
        <>
        <div className="bg-[#282828] pt-[60px] mt-[40px]">
            {/* Top Footer Content */}
            <div className="flex flex-col-reverse md:flex-row flex-wrap md:justify-around md:items-start gap-10 px-6">
            
            {/* Map Section */}
            <div className="flex flex-col justify-between items-end md:items-center text-center md:text-right">
                <h1 className="tajawal-bold text-[22px] text-white">موقع المدرسة على الخريطة</h1>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.194653605418!2d36.7148163251529!3d34.717553382309845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230fc199801c91%3A0x1a309fc96e6430e8!2z2YXYr9ix2LPYqSDYp9mE2YXYqtmB2YjZgtmK2YYg2KfZhNij2YjZhNmJ!5e1!3m2!1sar!2snl!4v1755679352321!5m2!1sar!2snl"
                className="w-[295px] h-[155px] mt-6 rounded-md"
                allowFullScreen=""
                loading="lazy"
                ></iframe>
            </div>

            {/* App Download */}
            <div className="flex flex-col justify-between items-end md:items-center">
            <h1 className="tajawal-bold text-[22px] text-white">حمّل تطبيقنا</h1>
            <button
                className="h-[43px] w-[180px] bg-[var(--color-primary)] text-white tajawal-regular rounded-[24px] mt-6 
                        flex items-center justify-center px-4 text-[16px]"
            >
                اضغط هنا للتحميل
            </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-end text-white text-right">
            <h1 className="tajawal-bold text-[22px] text-white">تواصل معنا</h1>
            <div className="flex flex-col gap-4 mt-5">
                <div className="flex flex-row-reverse items-center gap-3">
                <img src="/03.png" alt="location" className="w-[20px] h-[20px]" />
                <h3>حمص، سوريا</h3>
                </div>
                <div className="flex flex-row-reverse items-center gap-3">
                <img src="/01.png" alt="email" className="w-[20px] h-[20px]" />
                <h3>example@gmail.com</h3>
                </div>
                <div className="flex flex-row-reverse items-center gap-3">
                <img src="/02.png" alt="phone" className="w-[20px] h-[20px]" />
                <h3>+963994785602</h3>
                </div>
                <div className="flex flex-row-reverse items-center gap-3">
                <img src="/02.png" alt="landline" className="w-[20px] h-[20px]" />
                <h3>0312621636</h3>
                </div>
            </div>
            </div>

            {/* School Info */}
            <div className="flex flex-col justify-between items-end md:items-center">
                <h1 className="tajawal-bold text-[22px] text-white">مدرسة المتفوقين</h1>
                <img className="mt-5 w-[90px]" src="/footer.png" alt="logo" />
            </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-600 mt-10 py-4">
            <p className="text-center text-gray-400 text-sm">
                جميع الحقوق محفوظة وزارة التربية السورية مدارس المتفوقين © 2025
            </p>
            </div>
        </div>
        </>
    )
}

export default Footer
