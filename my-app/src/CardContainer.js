import React from 'react'
import Card from './Card'

const users = [
  {name: "Helen Doe", image: "https://semantic-ui.com/images/avatar/large/helen.jpg", level: 4, points: 2435}, 
  {name: "Daniel Rodriguez", image: "https://semantic-ui.com/images/avatar/large/daniel.jpg", level: 13, points: 5235}, 
  {name: "Joe Jones", image: "https://semantic-ui.com/images/avatar/large/joe.jpg", level: 20, points: 10513}
]

const CardContainer = () => {
  return users.map(user => <Card user={user}/>)
}

export default CardContainer