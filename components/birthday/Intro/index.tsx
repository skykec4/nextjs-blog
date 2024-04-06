import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import TextDecoration from '../TextDecoration'
import IntroDecoration from './IntroDecoration'

const index = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const [padding, setPadding] = useState(0)

  const getHieght = () => {
    if (!ref.current) return
    console.log('resize', ref.current?.clientHeight)
    setPadding(ref.current?.clientHeight)
  }
  useEffect(() => {
    getHieght()
    window.addEventListener('resize', getHieght)
  }, [])
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[360px] mx-auto">
        <div className="w-[170px] h-[77px] relative mb-6">
          <Image
            src={'/images/intro-birthday.png'}
            layout="fill"
            alt={'intro-image1'}
          />
        </div>
        <div className="relative w-[300px] h-auto aspect-[7/10] rounded-[20px] border overflow-hidden mb-6">
          <Image
            src={'/images/chaea/1.jpg'}
            layout="fill"
            alt={'intro-image'}
          />
        </div>
        <span className="font-jr text-[1.56rem] text-[#FFABBF] flex relative justify-center items-center gap-2 mb-6">
          <strong className="text-black text-[2.25rem]">김채아</strong> 처음생일
          <TextDecoration />
        </span>
        <span>
          2024.04.28 <span className="text-red-500">일요일</span> 11:30
        </span>
        <span>우설화 (하남미사점)</span>
        <div className="relative w-screen h-auto">
          <div className="absolute w-full" ref={ref}>
            <IntroDecoration />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: padding }} />
    </>
  )
}

export default index
