import React from 'react'
import Image from 'next/image'
import IntroduceRow from './IntroduceRow'
import SectionLayout from '../SectionLayout'
import SectionTitle from '../common/SectionTitle'

export default function index() {
  return (
    <SectionLayout>
      {/* <div className="h-[3.125rem] w-[7.6rem] relative mb-[4rem]">
        <Image src={'/images/introduce.png'} layout="fill" />
      </div> */}
      <SectionTitle src={'/images/introduce.png'} />

      <div className="relative w-full h-auto aspect-[2/3] rounded-t-full overflow-hidden">
        <img
          className="w-full h-full absolute"
          src={'/images/chaea/5.jpg'}
          alt="layer-image"
        />
        {/* <div className="abolute w-full h-[50px] bottom-[-50px] left-0 right-0 z-[2]"> */}
        {/* <div className="relative h-full w-full"> */}
        <img
          className="z-[0] absolute bottom-0 w-full"
          src="/images/layer-decoration.png"
          alt="layer-deco"
        />
        {/* <Image
              src={'/images/layer-decoration.png'}
              width="100%"
              height="100%"
            /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="w-full bg-[#FFF2F0] relative -mt-[1px]">
        {/* <div className="relative w-full h-[50px] z-[2]"> */}

        {/* </div> */}
        <IntroduceRow title={'나의 탄신일'} content={'2023.04.28'} />
        <IntroduceRow title={'사랑스런 태명'} content={'(홍)삼이'} />
        <IntroduceRow title={'좋아하는 것'} content={'다리미 자동차'} />
        <IntroduceRow title={'위대한 특기'} content={'으라차찻! 일어서기'} />
        <IntroduceRow title={'하고싶은 말'} content={'맘마 좀 더 주세요!'} />
        <IntroduceRow title={'비장의 무기'} content={'귀여움'} />
      </div>
    </SectionLayout>
  )
}
