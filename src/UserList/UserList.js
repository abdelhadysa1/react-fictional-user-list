import React from 'react'
import List from '../UI/List'

const UserList = ({ userList }) => {
    return (
        <>
            <h2>User List</h2>
            <List>
                <ul>
                    {userList.map((user) => <li key={user.username}>{user.username} (Age: {user.age})</li>)}
                </ul>
            </List>
        </>
    )
}

export default UserList