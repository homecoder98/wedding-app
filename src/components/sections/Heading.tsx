import { HeadingStyle } from '@/styles/HeadingStyle'
import Section from '@/components/shared/Section'
import { parseISO, format, getDay } from 'date-fns'

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <>
      <Section>
        <HeadingStyle>
          <div>{format(weddingDate, 'yy.MM.dd')}</div>
          <div>{DAYS[getDay(weddingDate)]}</div>
        </HeadingStyle>
      </Section>
    </>
  )
}

export default Heading
