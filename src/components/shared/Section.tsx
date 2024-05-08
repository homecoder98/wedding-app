import { SectionStyle } from '@/styles/SectionStyle'

function Section({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SectionStyle>{children}</SectionStyle>
    </>
  )
}

export default Section
