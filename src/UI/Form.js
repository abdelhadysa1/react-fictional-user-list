import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 10px;
    border-top: 5px solid purple;
`

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-sizing: border-box;

    & label {
        margin-bottom: 5px;
    }

    & input[type=text], input[type=number] {
        color: purple;
        padding: 10px 5px;
        margin: 10px;
    }

    & input[type=text]::placeholder, input[type=number]::placeholder {
        color: purple;
    }

    label {
        color: #aaa;
        margin-top: 10px;
        margin-left: 10px;
    }
`

export { 
    Form,
    FormControl,
}