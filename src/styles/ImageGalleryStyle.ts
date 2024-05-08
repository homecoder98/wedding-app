import styled from 'styled-components'

export const WrapImages = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
`

export const WrapImage = styled.li`
  width: 100%;
  position: relative;
  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absoulte;
  left: 0;
  object-fit: cover;
  border-radius: 8px;
`
