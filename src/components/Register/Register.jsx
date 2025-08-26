import React from "react";

const steps = [
  {
    id: 1,
    title: "شروط القبول",
    desc: [
      "في مدارس المتفوقين للصفوف",
      "السابع الأساسي",
      "الأول الثانوي"
    ],
  },
  {
    id: 2,
    title: "شروط القبول",
    desc: [
      "في مدارس المتفوقين للصفوف",
      "الانتقالية : الثامن و التاسع",
      "الثاني و الثالث من مرحلة التعليم الثانوي"
    ],
  },
  {
    id: 3,
    title: "بدء التسجيل",
    desc: [
      "لاختبار القبول و ملئ الشواغر في الصفوف",
      "الثامن و التاسع الأساسيين - الثاني و الثالث الثانوي",
      "من يوم الخميس تاريخ 21/8/2025",
      "لغاية يوم الخميس تاريخ 28/8/2025",
      "في دوائر البحوث ضمن مديريات التربية و التعليم"
    ],
  },
  {
    id: 4,
    title: "مواعيد الإجراء",
    desc: [
      "الاختبار الكتابي ( اختيار متعدد 100 سؤال )",
      "يوم الثلاثاء 2/9/2025",
      "يبدأ 9 صباحاً حتى 10:45 صباحاً",
    ],
    
  },
  {
    id: 5,
    title: "بدء الدوام",
    desc: [
      "يبدأ الدوام في مدارس المتفوقين مع بداية الدوام الرسمي",
      "لمدارس ( التعليم الأساسي - الثانوية العامة )"
    ],
    
  },
];

const RegisterSteps = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative mt-[40px]">
      {/* Title */}
      <h2 className="tajawal-bold text-[30px] md:text-[40px] text-center mb-12">
        خطوات التسجيل
      </h2>

      {/* Timeline line (desktop only) */}
      <div className="hidden md:block absolute top-24 bottom-0 left-1/2 w-[2px] bg-gray-300 transform -translate-x-1/2"></div>

      {/* Steps */}
      <div className="flex flex-col gap-12">
        {steps.map((step, index) => {
          const isRight = index % 2 === 0; // alternate sides
          return (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center md:items-start ${
                isRight ? "md:justify-end" : "md:justify-start"
              } md:relative`}
            >
              {/* Number Circle */}
              <div
                className={`
                  flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
                  rounded-full bg-[var(--color-primary)] text-white tajawal-bold text-lg z-10
                  mb-4 md:mb-0 md:mx-4
                  ${isRight ? "md:order-2" : "md:order-1"}
                `}
              >
                {step.id}
              </div>

              {/* Card Content */}
              <div
                className={`bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-md w-full text-right ${
                  isRight ? "md:mr-10" : "md:ml-10"
                }`}
              >
                <h3 className="tajawal-bold text-lg sm:text-xl mb-2">
                  {step.title}
                </h3>
                <ul className="tajawal-regular text-sm sm:text-base text-gray-600 leading-relaxed space-y-1">
                  {step.desc.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegisterSteps;
