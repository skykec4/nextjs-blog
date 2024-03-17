import React from 'react'

interface IIntroduceRow {
  title: string
  content: string
}

const IntroduceRow = ({ title, content }: IIntroduceRow) => {
  return (
    <div className="flex relative py-2 text-[1rem] font-bold font-dodam items-center">
      <div className="w-[40%] pl-[1.125rem] text-[#FF7898]">{title}</div>
      <div>{content}</div>
    </div>
  )
}

export default IntroduceRow
