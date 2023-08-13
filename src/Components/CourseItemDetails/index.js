import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  AppContainer,
  ResponsiveContainer,
  CourseImage,
  CourseHeading,
  CourseDescription,
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

class CourseItemDetails extends Component {
  state = {course: {}, apiStatus: apiStatusView.initial}

  componentDidMount() {
    this.startApiCall()
  }

  startApiCall = async () => {
    this.setState({apiStatus: apiStatusView.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    const courseDetails = {
      id: data.course_details.id,
      name: data.course_details.name,
      imageUrl: data.course_details.image_url,
      description: data.course_details.description,
    }

    if (response.ok) {
      this.setState({course: courseDetails, apiStatus: apiStatusView.success})
    } else {
      this.setState({apiStatus: apiStatusView.failure})
    }
  }

  retryApiCall = () => {
    this.startApiCall()
  }

  renderSuccessView = () => {
    const {course} = this.state
    const {name, description, imageUrl} = course
    console.log(course)

    return (
      <ResponsiveContainer>
        <CourseImage src={imageUrl} alt={name} />
        <div>
          <CourseHeading>{name}</CourseHeading>
          <CourseDescription>{description}</CourseDescription>
        </div>
      </ResponsiveContainer>
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
    console.log(apiStatus)

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
        <AppContainer>{this.renderUserView()}</AppContainer>
      </>
    )
  }
}

export default CourseItemDetails
