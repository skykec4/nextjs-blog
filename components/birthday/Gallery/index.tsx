import React from 'react'
import SectionLayout from '../SectionLayout'
import SectionTitle from '../common/SectionTitle'
import Image from 'next/image'
import clsx from 'clsx'

export default function index() {
  const rowCounct = 9
  return (
    <SectionLayout>
      <SectionTitle src={'/images/gallery.png'} />
      <div
        className="w-full grid grid-rows-18 grid-flow-col gap-[1px]"
        style={{
          height: rowCounct * 80,
        }}
      >
        <ImageBox
          imageName={3}
          className="row-[span_3_/_span_3] col-[span_2_/_span_3] row-start-1 col-start-3"
        />
        <ImageBox
          imageName={1}
          className="row-[span_3_/_span_3] col-[span_3_/_span_2] row-start-1 col-start-1"
        />

        <ImageBox
          imageName={11}
          className="row-[span_6_/_span_3] col-[span_3_/_span_2] row-start-4 col-start-4"
        />
        <ImageBox
          imageName={2}
          className="row-[span_3_/_span_3] col-[span_2_/_span_3] row-start-4 col-start-1"
        />

        {/* <ImageBox
          imageName={5}
          className="row-[span_6_/_span_6] col-[span_2_/_span_2] row-start-7 col-start-1"
        /> */}

        {/* <ImageBox
          imageName={6}
          className="row-[span_3_/_span_3] col-[span_1_/_span_1] row-start-7 col-start-3"
        /> */}
        {/* <ImageBox className="row-[span_3_/_span_3] col-[span_2_/_span_2] row-start-5 col-start-4" /> */}

        {/* <ImageBox className="row-[span_2_/_span_2] col-[span_3_/_span_2] row-start-8 col-start-1" /> */}
        {/* <ImageBox
          imageName={7}
          className="row-[span_3_/_span_3] col-[span_2_/_span_3] row-start-10 col-start-3"
        /> */}

        {/* <ImageBox
          imageName={4}
          className="row-[span_3_/_span_3] col-[span_2_/_span_3] row-start-10 col-start-1"
        />
        <ImageBox
          imageName={9}
          className="row-[span_3_/_span_3] col-[span_3_/_span_2] row-start-10 col-start-4"
        /> */}

        <ImageBox
          imageName={12}
          isPng
          className="row-[span_3_/_span_3] col-[span_3_/_span_2] row-start-16 col-start-1"
        />
        <ImageBox
          imageName={8}
          className="row-[span_3_/_span_3] col-[span_3_/_span_3] row-start-16 col-start-3"
        />
      </div>
    </SectionLayout>
  )
}

interface IImageBox {
  row?: number
  col?: number
  imageName: number
  isPng?: boolean
  className?: string
}

const ImageBox = ({
  row,
  col,
  className,
  isPng = false,
  imageName,
}: IImageBox) => {
  //className="row-span-3 col-span-2 bg-black

  // col 가로
  // row 세로
  const rowNum = row || 1
  const colNum = col || 1

  const width = 50
  const height = 50

  //   let classArray = `relative w-[${width * colNum}px] h-[${height * rowNum}px] `
  let classArray = `relative w-auto h-auto `
  //   let classArray = `relative `
  // let classArray = `relative aspect-square w-fit h-fit`

  if (rowNum > 1) {
    classArray += `row-span-${rowNum} `
  }
  if (colNum > 1) {
    // if (classArray.length > 0) classArray += ' '
    classArray += `col-span-${colNum}`
  }

  return (
    <div className={clsx(classArray, className)}>
      <Image
        className="object-cover"
        src={`/images/chaea/${imageName}.${isPng ? 'png' : 'jpg'}`}
        layout="fill"
        alt={'main-image'}
      />
    </div>
  )
}
