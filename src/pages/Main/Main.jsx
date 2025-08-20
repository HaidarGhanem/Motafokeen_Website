import "./Main.css";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import MainCarousel from "../../components/MainPosts/MainPosts";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header
        img="url('/1.png')"
        title="مدرسة المتفوقين الأولى"
        desc=" نحن نؤمن بأن التعليم هو مفتاح المستقبل، ونسعى لتوفير بيئة تعليمية متميزة تساعد طلابنا على تحقيق أحلامهم وطموحاتهم."
      />

      <div className="relative flex justify-center gap-[40px] flex-wrap">
        <div className="main_card mt-[-20px] w-[250px] h-[298px] rounded-[20px] flex flex-col justify-center items-center gap-[40px] bg-[var(--light)]">
          <img src="/11.png" alt="Teachers" />
          <div className="tajawal-regular flex flex-col justify-center items-center text-[28px] text-[--color-text]">
            <h3>+50</h3>
            <h3>معلم و معلمة</h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] h-[298px] rounded-[20px] flex flex-col justify-center items-center gap-[40px] bg-[var(--light)]">
          <img src="/12.png" alt="Years of excellence" />
          <div className="tajawal-regular flex flex-col justify-center items-center text-[28px] text-[--color-text]">
            <h3>+26</h3>
            <h3>سنة من التميُّز</h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] h-[298px] rounded-[20px] flex flex-col justify-center items-center gap-[40px] bg-[var(--light)]">
          <img src="/13.png" alt="Awards" />
          <div className="tajawal-regular flex flex-col justify-center items-center text-[28px] text-[--color-text]">
            <h3>+32</h3>
            <h3>جائزة وإنجاز</h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] h-[298px] rounded-[20px] flex flex-col justify-center items-center gap-[40px] bg-[var(--light)]">
          <img src="/14.png" alt="Students" />
          <div className="tajawal-regular flex flex-col justify-center items-center text-[28px] text-[--color-text]">
            <h3>+960</h3>
            <h3>طالب وطالبة</h3>
          </div>
        </div>
      </div>

      <Title
        title="اهلًا بكم في مدرسة المتفوقين الأولى"
        desc="تأسَّست مدرسةُ المتفوقينَ الأولى عام 1999 بهدف تقديمِ تعليمٍ مُتميِّزٍ يجمعُ بين الأصالةِ والمعاصرةِ، ونحنُ نفخرُ بتخريجِ أجيالٍ من الطلابِ المتميِّزينَ الذين يُساهمونَ في بناءِ مُجتمعِهم ووَطَنِهم."
      />

      <div className="mt-[80px] flex justify-center items-center flex-wrap gap-[40px]">
        <div className="main_card mt-[-20px] w-[250px] h-[382px] rounded-[20px] flex flex-col justify-around items-center gap-[40px] bg-white">
          <img src="/21.png" alt="Mission" />
          <div className="flex flex-col justify-center items-center gap-[20px] text-[18px] text-center text-[--color-text]">
            <h3 className="tajawal-bold">الرسالة</h3>
            <h3 className="tajawal-regular mx-4">
              تَقديم تعليم مُتميِّز يُساعِد الطلاب على تحقيقِ إمكاناتهم الكاملة
              وإعدادهم لمستقبل مشرقٍ.
            </h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] h-[382px] rounded-[20px] flex flex-col justify-around items-center gap-[40px] bg-white">
          <img src="/22.png" alt="Vision" />
          <div className="flex flex-col justify-center items-center gap-[20px] text-[18px] text-center text-[--color-text]">
            <h3 className="tajawal-bold">الرؤية</h3>
            <h3 className="tajawal-regular mx-4">
              أن نكون المدرسة الرائدة في التعليم المُتميّز والابتكار التربويّ في
              المنطقة.
            </h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] h-[382px] rounded-[20px] flex flex-col justify-around items-center gap-[40px] bg-white">
          <img src="/23.png" alt="Values" />
          <div className="flex flex-col justify-center items-center gap-[20px] text-[18px] text-center text-[--color-text]">
            <h3 className="tajawal-bold">القيم</h3>
            <h3 className="tajawal-regular mx-4">
              التميز، الإبداع، الاحترام، المسؤولية، والعمل الجماعيّ هي أساس نهجِنا
              التعليميّ.
            </h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] h-[382px] rounded-[20px] flex flex-col justify-around items-center gap-[40px] bg-white">
          <img src="/23.png" alt="Excellence" />
          <div className="flex flex-col justify-center items-center gap-[20px] text-[18px] text-center text-[--color-text]">
            <h3 className="tajawal-bold">التميز</h3>
            <h3 className="tajawal-regular mx-4">
              نسعى للتَّميُّزِ في جميع جوانب العملية التعليمية من خلال أحدث الطُرق
              والتقنيات.
            </h3>
          </div>
        </div>
      </div>

      <Title
        title="المناهج التعليمية"
        desc="نُقدِّم برامج تعليميَّة وِفقَ خُطَّة وزارة التَّربية السوريَّة من خلال كادر مُحتَرف من المُدرِّسين، يُلبِّي احتياجات جميع المراحل الدِّراسيَّة ويُساعِد الطُّلّاب على تحقيق التَّميُّز الأكاديميِّ."
      />

      <div className="mt-[80px] flex justify-center items-center flex-wrap gap-[40px]">
        <div className="main_card mt-[-20px] w-[250px] md:w-[556px] h-[266px] rounded-[20px] flex flex-col justify-around items-center gap-[40px] bg-white">
          <img src="/31.png" alt="Secondary stage" />
          <div className="flex flex-col justify-center items-center gap-[20px] text-[18px] text-center text-[--color-text]">
            <h3 className="tajawal-bold">المرحلة الثانوية</h3>
            <h3 className="tajawal-regular mx-4">
              من الصف العاشر حتى البكالوريا
            </h3>
          </div>
        </div>

        <div className="main_card mt-[-20px] w-[250px] md:w-[556px] h-[266px] rounded-[20px] flex flex-col justify-around items-center gap-[40px] bg-white">
          <img src="/32.png" alt="Preparatory stage" />
          <div className="flex flex-col justify-center items-center gap-[20px] text-[18px] text-center text-[--color-text]">
            <h3 className="tajawal-bold">المرحلة الإعدادية</h3>
            <h3 className="tajawal-regular mx-4">
              من الصف السابع حتى الصف التاسع
            </h3>
          </div>
        </div>
      </div>

      <Title title="الأخبار والإعلانات" desc="" />

      <MainCarousel />
    <Title title="تواصل معنا" desc="نَحنُ هُنا للإجابة على جميع استفساراتِكم ومساعدتِكم. لا تتردَّدوا في التَّواصل معنا." />
       <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-[40px]">
  <form className="w-full max-w-[1166px] bg-[#F2F2F2] form-style flex flex-col rounded-[16px] py-7 px-4 sm:px-6 md:px-8">
    {/* First Row - Name & Email */}
    <div className="flex flex-col md:flex-row justify-between gap-6">
      <div className="flex-1 flex flex-col text-right">
        <label htmlFor="fullName" className="tajawal-medium text-[18px] md:text-[20px]">
          الاسم الكامل
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="الاسم الكامل"
          className="text-right px-3 w-full h-[54px] bg-white rounded-[20px] tajawal-medium text-[16px] md:text-[20px] input-shadow mt-2 md:mt-4"
        />
      </div>
      
      <div className="flex-1 flex flex-col text-right">
        <label htmlFor="email" className="tajawal-medium text-[18px] md:text-[20px]">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          placeholder="البريد الالكتروني الخاص بك"
          className="text-right px-3 w-full h-[54px] bg-white rounded-[20px] tajawal-medium text-[16px] md:text-[20px] input-shadow mt-2 md:mt-4"
        />
      </div>
    </div>

    {/* Second Row - Phone & Subject */}
    <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
      <div className="flex-1 flex flex-col text-right">
        <label htmlFor="phone" className="tajawal-medium text-[18px] md:text-[20px]">
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="رقم الهاتف"
          className="text-right px-3 w-full h-[54px] bg-white rounded-[20px] tajawal-medium text-[16px] md:text-[20px] input-shadow mt-2 md:mt-4"
        />
      </div>
      
      <div className="flex-1 flex flex-col text-right">
        <label htmlFor="subject" className="tajawal-medium text-[18px] md:text-[20px]">
          موضوع الرسالة
        </label>
        <input
          type="text"
          id="subject"
          placeholder="موضوع الرسالة"
          className="text-right px-3 w-full h-[54px] bg-white rounded-[20px] tajawal-medium text-[16px] md:text-[20px] input-shadow mt-2 md:mt-4"
        />
      </div>
    </div>

    {/* Message Textarea */}
    <div className="flex flex-col text-right mt-6">
      <label htmlFor="message" className="tajawal-medium text-[18px] md:text-[20px]">
        الرسالة
      </label>
      <textarea
        id="message"
        placeholder="اكتب رسالتك هنا.."
        className="text-right px-3 py-2 w-full h-[179px] bg-white rounded-[20px] tajawal-medium text-[16px] md:text-[20px] input-shadow mt-2 md:mt-4 resize-none"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center mt-6">
      <button
        type="submit"
        className="w-full md:w-[580px] h-[60px] md:h-[76px] text-[20px] md:text-[26px] rounded-[24px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
      >
        إرسال
      </button>
    </div>
  </form>
</div>

<Footer />
    </>
  );
};

export default Main;