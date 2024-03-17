import React from 'react'
import Image from 'next/image'

interface ISectionTitle {
  src: string
  type?: string
}

export default function SectionTitle({ src, type }: ISectionTitle) {
  if (type === 'dday') {
    return (
      <div className="h-[1.925rem] w-[8.6rem] relative mb-[4rem]">
        <Image src={src} layout="fill" alt={'title'} />
      </div>
    )
  }
  return (
    <div className="h-[3.125rem] w-[7.6rem] relative mb-[4rem]">
      <Image src={src} layout="fill" alt={'title'} />
    </div>
  )
}
