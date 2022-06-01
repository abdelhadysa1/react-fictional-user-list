import styled from 'styled-components'

const Button = styled.div`
    color: purple;
    background-color: white;
    padding: 5px 2.5px;
    margin: 10px;
    text-align: center;
    max-width: 100px;
    cursor: pointer;
    transition: 1s all;
    overflow-wrap: break-word;
    border: 1px solid purple;

    &:hover {
        color: white;
        background-color: purple;
    }
`

export default Button