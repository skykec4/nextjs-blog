import React from 'react'
import useGalleryStore from 'store/galleryStore'

export default function GalleryModal() {
  const { isShow, showToggle } = useGalleryStore()

  console.log(isShow)
  if (!isShow) {
    return null
  }
  return (
    <div className="fixed top-0 left-0 right-0 w-screen h-screen bg-black z-10 flex flex-col">
      <button
        onClick={() => {
          showToggle()
        }}
        className="btn-close h-[56px] relative w-[56px] self-end flex"
      ></button>
    </div>
  )
}
