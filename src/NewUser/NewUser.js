import React, { useState } from 'react'
import UserForm from './UserForm'

const NewUser = ({ onAddUser, onAddAlert }) => {
    const [ userInput, changeUserInput ] = useState({
        username: '',
        age: '',
    })
    const handleChange = (e) => {
        changeUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, age } = userInput
        try {
            onAddUser(username, parseFloat(age))
        } catch (e) {
            console.log(e)
            onAddAlert(true, 'Error', e.message, 'I understand.')
        }
    }
    return (
        <>
            <h2>Add New User</h2>
            <UserForm handleChange={handleChange} handleSubmit={handleSubmit} username={userInput.username} age={userInput.age} />
        </>
    )
}

export default NewUser