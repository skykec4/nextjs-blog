import BirthdayLayout from 'components/birthday-layout'
import Intro from 'components/birthday/Intro'
import Invite from 'components/birthday/Invite'
import Introduce from 'components/birthday/Introduce'
import Gallery from 'components/birthday/Gallery'
import Dday from 'components/birthday/Dday'
import Location from 'components/birthday/Location'
import useGalleryStore from 'store/galleryStore'
import GalleryModal from 'components/birthday/Gallery/GalleryModal'

export default function index() {
  const { isShow, showToggle } = useGalleryStore()

  return (
    <BirthdayLayout seoTitle="김채아 생일 초대장">
      <Intro />
      <Invite />
      <Introduce />
      <Gallery />
      <Dday />
      <Location />
      <GalleryModal />
    </BirthdayLayout>
  )
}
