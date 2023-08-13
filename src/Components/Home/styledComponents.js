import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AppHeading = styled.h1`
  color: #1c293a;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`
export const CoursesContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-grow: 1;
`
export const LoaderContainer = styled.div`
  width: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
`
export const FailureSubHeading = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
export const RetryButton = styled.button`
  background-color: #4656a1;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
