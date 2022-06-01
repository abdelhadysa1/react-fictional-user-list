import React, { useState } from 'react'

// Components
import UserList from './UserList/UserList'
import NewUser from './NewUser/NewUser'
import Alert from './Alert/Alert.js'

// UI components
import Container from './UI/Container'

// Validators
import validateUsername from './utils/validateUsername'
import validateAge from './utils/validateAge'

const DEFAULT_USER_LIST = [
  {
    username: 'john',
    age: 32,
  },
  {
    username: 'mary',
    age: 23,
  },
]

const DEFAULT_USER_ALERT = {
  showAlert: false,
  title: '',
  message: '',
  buttonText: '',
}

function App() {
  const [ userList, changeUserList ] = useState(DEFAULT_USER_LIST)
  const [ userAlert, changeUserAlert ] = useState(DEFAULT_USER_ALERT)
  const addUser = (username, age) => {
    if (!validateUsername(username)) throw new Error('Invalid username')
    if (!validateAge(age)) throw new Error('Invalid age (make sure it is >0 and <100)')
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
  const addAlert = (showAlert = DEFAULT_USER_ALERT.showAlert, title = DEFAULT_USER_ALERT.title, message = DEFAULT_USER_ALERT.message, buttonText = DEFAULT_USER_ALERT.buttonText) => {
    changeUserAlert({
      showAlert,
      title,
      message,
      buttonText,
    })
  }
  return (
    <Container>
      <Alert showAlert={userAlert.showAlert} title={userAlert.title} message={userAlert.message} buttonText={userAlert.buttonText} onAddAlert={addAlert} />
      <h1>Fictional User List</h1>
      <NewUser onAddUser={addUser} onAddAlert={addAlert} />
      <UserList userList={userList} />
    </Container>
  );
}

export default App;
