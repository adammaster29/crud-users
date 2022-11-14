import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import Userslist from './components/Userslist'

function App() {

  const[users, setUsers] = useState([])
const[selectUser,setSelectUser] = useState(null)
const[ clearUsers,setClearUser] = useState(null)

useEffect(()=>{
axios.get(`https://users-crud1.herokuapp.com/users/`)
.then(res => setUsers(res.data))
},[])


/*get users*/
const getUsers=()=>{
  axios.get(`https://users-crud1.herokuapp.com/users/`)
  .then(res => setUsers(res.data))
}


/*select or edit*/
const selectUsers=(user)=>{
setSelectUser(user)
}

const clearUser=(user)=>{
  setClearUser(user)
  }



console.log(users)

  return (
    <div className="App">
       <UsersForm clearUser={clearUser} clearUsers={clearUsers}  selectUser={selectUser}  getUsers={getUsers} />
     <Userslist  selectUsers={selectUsers} users={users}/>



    </div>
  )
}

export default App
