import logo from './logo.svg';
import './App.css';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { useEffect, useState } from 'react';
function App() {
  const [likeColor, setlikeColor] = useState("")
  const handleClick = () => {
    const color = likeColor? '' : 'primary';
    setlikeColor(color)
  }

  const [users, setUsers] = useState([])
  const [userId, setUsersId] = useState({})
  const [randomUser, setrandomUser] = useState({})
  const [teams, setTeams] = useState({})

  // users
  useEffect(() => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
  .then(response => response.json())
  .then(data =>setUsers(data))

    // single user
    fetch( "https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data =>setUsersId(data))

// random users
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data =>setrandomUser(data.results[0]))

// all leagues
fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
.then(response => response.json())
.then(data =>setTeams(data))

  }, [])




  return (
    <div className="App">
    <ThumbUp onClick={handleClick} color={likeColor}/>
    <h3>{userId.name} <br></br> </h3>
   {/* nested */}
    <p>{randomUser.name?.first && randomUser.name?.last}</p>
    <p>{teams.strLeague}</p>
    {/* <p>{teams.leagues}</p> */}
    <ul>
    {
      users.map(user => <li>{user.name}</li>)
    }
    </ul>
    {/* <ul>
    {
      users.data.map(user => <li>{user.name}</li>)
    }
    </ul> */}
    {/* <ul>
    {
      teams.find(team => (<li>{team}</li>))
    }
    </ul> */}
    </div>
  );
}

export default App;
