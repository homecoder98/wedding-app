import { WrapImages, WrapImage, Image } from '@/styles/ImageGalleryStyle'
import Section from '@/components/shared/Section'

function ImageGallery({ images }: { images: string[] }) {
  return (
    <>
      <Section title="사진첩">
        <WrapImages>
          {/* 수정, 삭제 없음 */}
          {images.map((src, idx) => (
            <WrapImage key={idx}>
              <Image src={src} alt="사진첩 이미지" />
            </WrapImage>
          ))}
        </WrapImages>
      </Section>
    </>
  )
}

export default ImageGallery
