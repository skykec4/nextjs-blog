import { create } from 'zustand'

interface IGallery {
  isShow: boolean
  showToggle: () => void
}

const useGalleryStore = create<IGallery>((set) => ({
  isShow: false,
  showToggle: () => set((state) => ({ isShow: !state.isShow })),
}))

export default useGalleryStore
