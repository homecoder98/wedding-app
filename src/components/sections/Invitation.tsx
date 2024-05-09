import Section from '@/components/shared/Section'
import Text from '@/components/shared/Text'
import '@/styles/Invitation.css'

function Invitation({ message }: { message: string }) {
  return (
    <>
      <Section>
        <div className="container">
          <Text>{message}</Text>
        </div>
      </Section>
    </>
  )
}

export default Invitation
