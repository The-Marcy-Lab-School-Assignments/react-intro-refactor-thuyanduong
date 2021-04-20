import React from 'react'

const Card = (props) => {
  const {level, points, name, image} = props.user
  return (
    <div className="card">
      <div className="inner-card">
        <div className="left-card">
          <div className="bubble">
            Level {level}
          </div>
          <div className="picture-div">
            <img className="picture" src={image}/>
          </div>
          <div className="bubble">
            {points} POINTS
          </div>
        </div>
        <div className="right-card">
          <header>{name}</header>
          <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="sub-text">Mouse over the card for more info</p>
        </div>
      </div>
    </div>
  )
}

export default Card