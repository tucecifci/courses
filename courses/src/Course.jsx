import React from 'react'

function Course({course}) {
const {id, title, description, price, image} = course;

  return (
    <div className='course'>
        <div>
            <img src={image} width={300} />
            <h4>{title} </h4>
            <p>{description} </p>
            <h3>{price} </h3>

        </div>

    </div>
  )
}

export default Course