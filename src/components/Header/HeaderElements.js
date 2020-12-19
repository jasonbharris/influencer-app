import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 500px;
  background-color: #FFFBFC;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderMain = styled.div`
  width: 80%;
  height: 100%;
  background-image: url('../images/form-pic.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    background-position: center;
  }
`

export const Heading = styled.h1`
  font-family: Raleway, sans-serif;
  margin-left: 50px;
  font-weight: 700;
  font-size: 3.3rem;
  color: #fffbfc;
`

export const SubHeading = styled.h3`
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #fffbfc;
`
