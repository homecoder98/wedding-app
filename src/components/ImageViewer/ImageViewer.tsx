import { ImageViewerStyle } from '@/styles/ImageViewer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '@/styles/swiper.css'

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  if (open === false) return null
  return (
    <>
      <ImageViewerStyle>
        <CloseButton onClose={onClose} />
        <Swiper
          className="swiper-wrapper"
          spaceBetween={20}
          slidesPerView={1}
          loop
          initialSlide={selectedIdx}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="swiper-slide">
              <img src={src} alt="이미지 뷰어"></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageViewerStyle>
    </>
  )
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <svg
      className="icon-close"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <title />
      <g data-name="Layer 7" id="Layer_7">
        <path d="M51.39,63.79l-40-31a1,1,0,0,1,0-1.58l40-31,1.23,1.58L13.63,32l39,30.21Z" />
      </g>
    </svg>
  )
}

export default ImageViewer
