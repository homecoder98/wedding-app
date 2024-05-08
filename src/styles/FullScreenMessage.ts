import styled, { keyframes } from 'styled-components'

export const FullScreenMessageStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`
const heart = keyframes`
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    38% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.85);
    }
`

export const HeartStyle = styled.div`
  fill: #ea7664;
  width: 120px;
  height: 120px;
  animation: ${heart} 1s linear infinite;
`
export const ErrorStyle = styled.div`
  width: 120px;
  height: 120px;
`
