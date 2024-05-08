import { SectionStyle, TitleStyle } from '@/styles/SectionStyle'

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
