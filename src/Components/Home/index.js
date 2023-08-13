import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Course from '../Course'
import {
  AppContainer,
  ResponsiveContainer,
  AppHeading,
  CoursesContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureSubHeading,
  RetryButton,
} from './styledComponents'

const apiStatusView = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiStatusView.initial}

  componentDidMount() {
    this.startApiCall()
  }

  startApiCall = async () => {
    this.setState({apiStatus: apiStatusView.inProgress})

    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    const courses = data.courses.map(course => ({
      id: course.id,
      name: course.name,
      logoUrl: course.logo_url,
    }))

    if (response.ok) {
      this.setState({courseList: courses, apiStatus: apiStatusView.success})
    } else {
      this.setState({apiStatus: apiStatusView.failure})
    }
  }

  retryApiCall = () => {
    this.startApiCall()
  }

  renderSuccessView = () => {
    const {courseList} = this.state
    console.log(courseList)

    return (
      <>
        <AppHeading>Courses</AppHeading>
        <CoursesContainer>
          {courseList.map(course => (
            <Course key={course.id} courseDetails={course} />
          ))}
        </CoursesContainer>
      </>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureSubHeading>
        We cannot seem to find the page you are looking for.
      </FailureSubHeading>
      <RetryButton type="button" onClick={this.retryApiCall}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderUserView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusView.success:
        return this.renderSuccessView()
      case apiStatusView.inProgress:
        return this.renderLoaderView()
      case apiStatusView.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <AppContainer>
          <ResponsiveContainer>{this.renderUserView()}</ResponsiveContainer>
        </AppContainer>
      </>
    )
  }
}

export default Home
