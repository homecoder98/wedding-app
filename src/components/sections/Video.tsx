import { VideoStyle } from '@/styles/VideoStyle'
import Section from '@/components/shared/Section'

function Video() {
  return (
    <>
      <Section>
        <VideoStyle>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            poster="/assets/poster.jpg"
          >
            <source src="/assets/main.mp4" type="video/mp4" />
          </video>
        </VideoStyle>
      </Section>
    </>
  )
}

export default Video
