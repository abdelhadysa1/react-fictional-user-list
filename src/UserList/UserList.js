import React from 'react'

const UserList = ({ userList }) => {
    return (
        <>
            {userList.map((user) => <li key={user.username}>{user.username} (Age: {user.age})</li>)}
        </>
    )
}

export default UserList