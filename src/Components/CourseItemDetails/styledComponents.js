import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  box-shadow: 0px 5px 5px 6px #e8e8e8;
  margin-top: 40px;
`
export const CourseHeading = styled.h1`
  color: #1c293a;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`
export const CourseImage = styled.img`
  width: 40%;
  margin-right: 16px;
`

export const CourseDescription = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
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
