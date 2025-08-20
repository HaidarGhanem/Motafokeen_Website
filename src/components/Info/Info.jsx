import React from "react";

const sections = [
  {
    id: 1,
    img: "/I-1.png",
    content: [
      {
        title: "تأسيس المدرسة",
        desc: "تأسست مدرسة المستقبل الدولي في دمشق عام 1999، ومنذ ذلك الحين أصبحت رائدة في تقديم التعليم المتميز. تهدف إلى إعداد الطلاب ليصبحوا قادة المستقبل وتطوير مهاراتهم الأكاديمية والشخصية، مع التركيز على القيم الأخلاقية والانتماء المجتمعي.",
      },
    ],
  },
  {
    id: 2,
    img: "/I-2.png",
    content: [
      {
        title: "رؤيتنا",
        desc: "أن تكون المدرسة الرائدة في التعليم المتميز والابتكار الأكاديمي في المنطقة.",
      },
      {
        title: "رسالتنا",
        desc: "تقديم تعليم متكامل للطلاب لإعدادهم لتحقيق إمكاناتهم الكاملة والمساهمة في مستقبل مشرق.",
      },
      {
        title: "قِيَمنا",
        desc: "الالتزام بالقيم، الاحترام، المسؤولية، والعمل الجماعي هي أساس نجاحنا.",
      },
    ],
  },
  {
    id: 3,
    img: "/I-3.png",
    content: [
      {
        title: "مَنهَجُنا التَّعليميّ",
        desc: "نقدّم منهجاً تعليمياً شاملاً يجمع بين المواد الأكاديمية والأنشطة الإبداعية من خلال كوادر تعليمية مؤهلة. هدفنا تنمية مهارات التفكير النقدي والابتكار لدى الطلاب، بما يضمن نجاحهم الأكاديمي وحياتهم العملية المستقبلية.",
      },
    ],
  },
  {
    id: 4,
    img: "/I-4.png",
    content: [
      {
        title: "مَرافِقُنا الدِّراسيَّة",
        desc: "توفّر المدرسة مرافق تعليمية حديثة ومتطورة تتضمن قاعات دراسية واسعة، مختبرات علمية متقدمة، مكتبة، وملاعب رياضية. نهدف إلى خلق بيئة تعليمية ملهمة وآمنة تعزز من تجربة الطلاب التعليمية.",
      },
    ],
  },
];

const Info = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10">
      {sections.map((sec, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={sec.id}
            className={`flex flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } bg-white rounded-4xl shadow-md border border-[var(--color-secondary)] overflow-hidden`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={sec.img}
                alt="school info"
                className="w-full h-56 sm:h-72 md:h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="md:w-1/2 p-6 sm:p-8 text-right flex flex-col justify-center gap-6">
              {sec.content.map((c, i) => (
                <div key={i}>
                  <h3 className="tajawal-bold text-lg sm:text-xl md:text-2xl mb-2 text-black">
                    {c.title}
                  </h3>
                  <p className="tajawal-regular text-sm sm:text-base md:text-lg text-[var(--color-text)] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
