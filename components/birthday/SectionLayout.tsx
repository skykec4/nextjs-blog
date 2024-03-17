import React from 'react'

interface ISectionLayout {
  children: React.ReactNode
  type?: string
}

export default function SectionLayout({ children, type }: ISectionLayout) {
  if (type === 'location') {
    return (
      <div className="flex flex-col justify-center items-center mt-[8rem]">
        {children}
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center mt-[8rem] px-[2rem]">
      {children}
    </div>
  )
}
