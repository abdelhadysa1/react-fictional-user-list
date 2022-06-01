import React from 'react'
import { Form, FormControl } from '../UI/Form'
import Button from '../UI/Button'

const UserForm = ({ handleChange, handleSubmit, username, age }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <FormControl>
                <label htmlFor='userFormUsername'>Username</label>
                <input id='userFormUsername' placeholder='Type your username here' onChange={handleChange} type={'text'} name='username' value={username}></input>
            </FormControl>
            <FormControl>
                <label htmlFor='userFormAge'>Age (1-100Yrs)</label>
                <input id='userFormAge' placeholder='How old are you?' onChange={handleChange} type={'number'} min={1} max={100} step={1} name='age' value={age}></input>
            </FormControl>
            <FormControl>
                <Button type='submit'>Add User</Button>
            </FormControl>
        </Form>
    )
}

export default UserForm