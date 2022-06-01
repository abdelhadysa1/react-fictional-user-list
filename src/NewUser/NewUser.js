import React, { useState } from 'react'
import UserForm from './UserForm'

import validateUsername from '../utils/validateUsername'
import validateAge from '../utils/validateAge'

const NewUser = ({ onAddUser }) => {
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
            if (!validateUsername(username)) throw new Error('Invalid username')
            if (!validateAge(parseFloat(age))) throw new Error('Invalid age (make sure it is >0 and <100)')
            onAddUser(username, parseFloat(age))
        } catch (e) {
            console.log(e)
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