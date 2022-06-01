import React, { useState } from 'react'

// Components
import UserList from './UserList/UserList'
import NewUser from './NewUser/NewUser'

// UI components
import Container from './UI/Container'

// Validators
import validateUsername from './utils/validateUsername'
import validateAge from './utils/validateAge'

let DEFAULT_USER_LIST = [
  {
    username: 'john',
    age: 32,
  },
  {
    username: 'mary',
    age: 23,
  },
]

function App() {
  const [ userList, changeUserList ] = useState(DEFAULT_USER_LIST)
  const addUser = (username, age) => {
    if (!validateUsername(username) || !validateAge(age)) throw new Error('Invalid input')
    for (const user of userList) {
      if (user.username === username) throw new Error('User already exists')
    }
    changeUserList((prevUserList) => [
      ...prevUserList,
      {
        username,
        age,
      }
    ])
  }
  return (
    <Container>
      <h1>Fictional User List</h1>
      <NewUser onAddUser={addUser} />
      <UserList userList={userList} />
    </Container>
  );
}

export default App;
