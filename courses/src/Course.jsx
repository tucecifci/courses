import React from 'react'

function Course({course}) {
const {id, title, description, price, image} = course;

  return (
    <div className='course'>
            <h4 className='course-title'>{title} </h4>
            <img src={image} width={300} height={400} />
            <p className='course-description'>{description} </p>
            <h3 className='cource-price'>{price} $ </h3>

    </div>
  )
}

export default Course