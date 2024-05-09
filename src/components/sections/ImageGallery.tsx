import { WrapImages, WrapImage, Image } from '@/styles/ImageGalleryStyle'
import Section from '@/components/shared/Section'
import ImageViewer from '../ImageViewer/ImageViewer'
import { useState } from 'react'

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const open = selectedIdx > -1 ? true : false

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <WrapImages>
          {/* 수정, 삭제 없음 */}
          {images.map((src, idx) => (
            <WrapImage
              key={idx}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <Image src={src} alt="사진첩 이미지" />
            </WrapImage>
          ))}
        </WrapImages>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
