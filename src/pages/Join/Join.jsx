import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import RegisterSteps from '../../components/Register/Register'

const Join = () => {
  return (
    <>
        <Header img="url('/join.png')" title='' desc='' />
        <Title title='انضم إلينا في رحلة نحو التميّز' desc='إذا كنت تبحث عن بيئة تعليمية تُثري العقول وتُطلق العنان للمواهب، فأهلاً بك في أسرتنا. نحن نؤمن بأن كل طالب هو قصة نجاح بانتظار أن تُكتب، ونتطلع لمساعدتك على تحقيق أحلامك.' />
        <RegisterSteps />
        <Footer />
    </>
  )
}

export default Join