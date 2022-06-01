import styled from 'styled-components'

const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.50);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Modal = styled.div`
    position: fixed;
    width: 100%;
    max-width: 750px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.50);
    z-index: 100;
    background-color: white;
    box-sizing: border-box;
`

const ModalTitle = styled.div`
    width: 100%;
    padding: 10px 5px;
    color: white;
    background-color: purple;
    font-size: 2.8rem;
    line-height: 2.8rem;
    box-sizing: border-box;
`

const ModalText = styled.div`
    width: 100%;
    padding: 15px 10px;
    color: purple;
    background-color: white;
    font-size: 1.2rem;
    line-height: 1.2rem;
    box-sizing: border-box;
`

const ModalControls = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`

export {
    ModalWrapper,
    Modal,
    ModalTitle,
    ModalText,
    ModalControls,
}