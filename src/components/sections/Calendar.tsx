import Section from '@/components/shared/Section'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'
import '@/styles/Calendar.css'
import { DayPicker } from 'react-day-picker'

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <>
      <Section>
        <div className="wrap-header">
          <span className="txt-date">{format(weddingDate, 'yyyy.MM.dd')}</span>
          <span className="txt-time">
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>

        <div className="wrap-calendar">
          <DayPicker
            locale={ko}
            month={weddingDate}
            selected={weddingDate}
            formatters={{ formatCaption: () => '' }}
          />
        </div>
      </Section>
    </>
  )
}

export default Calendar
