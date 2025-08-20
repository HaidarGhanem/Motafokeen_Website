import React from 'react'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import TeachersCarousel from '../../components/Teachers/Teachers'
import Title from '../../components/Title/Title'

const About = () => {
  return (
    <>
        <Header title='' desc='' img="url('/about.png')" />
        <Info />
        <Title title='كادر المدرسة' desc='' />
        <TeachersCarousel />
        <Footer />
    </>
  )
}

export default About