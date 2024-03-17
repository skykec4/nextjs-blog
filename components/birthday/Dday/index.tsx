import React, { useEffect, useState } from 'react'
import SectionLayout from '../SectionLayout'
import SectionTitle from '../common/SectionTitle'
import Image from 'next/image'

export default function index() {
  const [day, setDay] = useState(0)

  const now = new Date()
  useEffect(() => {
    const dday = new Date('2024-04-28T00:00:00+0000')

    const diff = now.getTime() - dday.getTime()
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24))
    setDay(diffDay)
  }, [])

  const arrDay = [
    '',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    '',
    '',
    '',
    '',
  ]
  return (
    <SectionLayout>
      <SectionTitle src={'/images/dday-birthday.png'} type="dday" />
      <div className="relative w-[16rem] h-[9rem] flex justify-center items-center">
        <Image
          className="absolute"
          src={'/images/dday-bg.png'}
          layout="fill"
          alt={'dday-bg'}
        />
        <span className="font-dodam font-[700] text-[2.5rem] text-[#FFABBF]">
          {day === 0 ? 'TODAY' : `D${day > 0 ? `+${day}` : `${day}`}`}
        </span>
      </div>

      <div className="mt-14 w-full flex justify-between text-[#333] border-b pb-2 mb-4">
        <div className="">
          <strong className="text-[1.25rem]">28</strong> April
        </div>
        <div>sun. 11:30</div>
      </div>

      <div className="grid grid-cols-7 w-full gap-[1px] text-[#333] text-[.9rem]">
        {arrDay.map((day, index) => {
          let color = ''
          if (day === 7 || day === 14 || day === 21 || day === 28)
            color = ' text-red-500'
          if (day === 28)
            color = ' text-[#FFABBF] border border-[#FFABBF] rounded-full'

          if (now.getMonth() === 3) {
            if (day === now.getDate() && day === 28)
              color += ' bg-[#FFABBF] text-white'
            else if (day === now.getDate()) color += ' bg-gray-200 rounded-full'
          }

          const className =
            'flex justify-center items-center aspect-square' + color
          return (
            <div key={index} className={className}>
              {day}
            </div>
          )
        })}
      </div>
    </SectionLayout>
  )
}
