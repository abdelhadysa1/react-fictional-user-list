import React from 'react'

const UserForm = ({ handleChange, handleSubmit, username, age }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type={'text'} name='username' value={username}></input>
            <input onChange={handleChange} type={'number'} min={1} max={100} step={1} name='age' value={age}></input>
            <button type='submit'>Add User</button>
        </form>
    )
}

export default UserForm