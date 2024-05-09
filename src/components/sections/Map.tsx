import Section from '@/components/shared/Section'
import '@/styles/Map.css'
import { useEffect, useRef } from 'react'
import { Location } from '@models/wedding'

declare global {
  interface Window {
    kakao: any
  }
}

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const market = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        market.setMap(map)
      })
    }
  }, [location])
  return (
    <>
      <Section title="오시는길">
        <div className="wrap-map">
          <span>{location.name}</span>
          <span>{location.address}</span>
          <div className="map" ref={mapContainer}></div>
          <a
            className="btn-find-map"
            href={location.link}
            target="_blank"
            rel="noreferrer"
          >
            길찾기
          </a>
        </div>

        <div>
          <WayToCome label="버스" list={location.waytocome.bus} />
          <WayToCome label="지하철" list={location.waytocome.metro} />
        </div>
      </Section>
    </>
  )
}

function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) {
  return (
    <div className="wrap-waytocome">
      <div className="txt-label">{label}</div>
      <ul>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Map
