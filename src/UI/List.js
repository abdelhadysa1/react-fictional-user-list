import styled from 'styled-components'

const List = styled.div`
    background-color: white;
    width: 100%;
    margin-top: 10px;
    border-top: 5px solid purple;
    color: #aaa;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin: 10px;
    }

    li {
        border: 1px solid #ccc;
        padding: 5px;
        margin-bottom: 5px;
    }

    @media (max-width: 768px) {
        padding-bottom: 1px;
    }
`

export default List