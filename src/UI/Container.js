import styled from 'styled-components'

const Container = styled.div`
    max-width: 1000px;
    margin: 10px auto;
    padding: 25px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
        display: block;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }
`

export default Container