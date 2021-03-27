import React from 'react'
import {courseDB} from '../data/courseDB'
import {Link} from 'react-router-dom'

const CourseList = () => {
    return (
        <ul> 
        <li><h4>Kurslar</h4></li>
          {courseDB.map(course=><li key={course.course}>
              <Link to={course.to}>
                 {course.course}
              </Link>
          </li>)}
        
      </ul>
    )
}

export default CourseList
