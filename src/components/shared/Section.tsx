import { SectionStyle, TitleStyle } from '@/styles/SectionStyle'
import '@/styles/Invitation.css'

function Section({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <>
      {title != null ? <TitleStyle>{title}</TitleStyle> : null}
      <SectionStyle>{children}</SectionStyle>
    </>
  )
}

export default Section
