import styled from 'styled-components'

const Button = styled.button`
    color: white;
    background-color: purple;
    padding: 5px 2.5px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
    transition: 1s all;
    overflow-wrap: break-word;
    border: 1px solid purple;
    max-width: 150px;
    user-select: none;

    &:hover {
        color: purple;
        background-color: white;
    }
`

export default Button