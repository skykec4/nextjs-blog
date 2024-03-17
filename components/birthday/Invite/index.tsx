import React from 'react'
import Image from 'next/image'
import SectionLayout from '../SectionLayout'
import SectionTitle from '../common/SectionTitle'

const index = () => {
  return (
    <SectionLayout>
      {/* <div className="h-[3.125rem] w-[7.6rem] relative mb-[4rem]">
        <Image src={'/images/invite.png'} layout="fill" />
      </div> */}
      <SectionTitle src={'/images/invite.png'} />
      <p className=" leading-[36px] text-[0.9375rem] text-center text-[rgb(51,51,51)]">
        품에 보듬어 안기도 조심스러웠던 <br />
        서윤이가 어느덧 건강하게 자라 <br />첫 생일을 맞이하게 되었습니다.
        <br />
        아낌없는 관심과 사랑을 보내주신 덕분에
        <br /> 이쁘고 건강하게 첫 생일을 맞이합니다.
        <br /> 감사드리는 마음으로 여러분과 함께 할 수 있는
        <br /> 정성 어린 자리를 마련하였습니다.
        <br />
        참석하시어 함께 축복해 주시면 감사하겠습니다.
      </p>
      {/* <p className="text-[#777]">
          2024.04.28.<span className="text-red-500">(일)</span> 11:30
        </p>
        <p>우설화 (하남미사점)</p> */}
    </SectionLayout>
  )
}

export default index
