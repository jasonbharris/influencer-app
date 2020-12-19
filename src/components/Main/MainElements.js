import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  background-color: #FFFBFC;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContent = styled.div`
  width: 85%;
  margin-left: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2.2rem;
  width: 80%;
`

export const MainList = styled.ul`
  width: 85%;
  margin-left: 30px;
  padding: 20px;
  list-style: none;
`

export const MainListItem = styled.li`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2.2rem;
  width: 100%;

  ::before {
    content: '>';
    color: #333533;
    font-size: 0.775rem;
    margin-right: 5px;
  }
`
