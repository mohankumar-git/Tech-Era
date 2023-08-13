import {Link} from 'react-router-dom'
import {ListContainer, CourseLogo, CourseName} from './styledComponents'

const Course = props => {
  const {courseDetails} = props
  const {id, logoUrl, name} = courseDetails

  return (
    <ListContainer>
      <Link className="link-item" to={`/courses/${id}`}>
        <CourseLogo src={logoUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </Link>
    </ListContainer>
  )
}

export default Course
