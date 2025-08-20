import React from 'react'

const Title = ({title , desc}) => {
  return (
    <div className='mt-[80px] md:mt-[50px] flex flex-col gap-[50px] items-center justify-center mx-[20px] md:mx-[90px]'>
        <h1 className='text-[30px] md:text-[40px] tajawal-bold text-[var(--color-text)] text-center'>{`${title}`}</h1>
        <h2 className='text-[20px] md:text-[28px] tajawal-regular text-[var(--color-text)] text-center'>{`${desc}`}</h2>
    </div>
  )
}

export default Title