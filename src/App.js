import React, { useState, useEffect } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function App() {

  {/* materila-ui-icon state */}
  const [likeColor,setLikeColor] = useState('')
  const hendelLike = () => {
    const color = likeColor ? '' : 'primary'
    setLikeColor(color)
  }

  {/* users state */}
  const [users, setUsers] = useState([])
  // singleUser state
  const [singleUser, setSingleUser] = useState({})
  // random state
  const [randomUser, setRandomUser] = useState({})
  useEffect(() => {
    // users api
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

    // singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    // randomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  },[])


  return (
    <div>
      {/* materila-ui-icon */}
      <ThumbUpAltIcon onClick={hendelLike} color={likeColor}/>
      {/* singleUser */}
      <h1>Single Usre: {singleUser.name}</h1>
      {/* randomUser */}
      <h1>Gender: {randomUser.gender}</h1>
  <h4>Name: {randomUser.name && randomUser.name.title} {randomUser.name && randomUser.name.first} {randomUser.name && randomUser.name.last}</h4>
  <h3>Name: {randomUser.name?.title?.first?.last}</h3>
      {/* users */}
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
