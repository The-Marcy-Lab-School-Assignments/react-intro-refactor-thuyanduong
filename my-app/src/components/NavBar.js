import React from "react"

const NavBar = (props) => {
  return (
    <ul>
      {props.pages.map(obj => <li><a href={obj.link} key={obj.text}>{obj.text}</a></li>)}
    </ul>
  )
}

export default NavBar