import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper, Modal, ModalText, ModalTitle, ModalControls } from '../UI/Modal'
import Button from '../UI/Button'

const AlertModal = ({ closeAlert, title, message, buttonText, modalRef }) => {
    return (
        <ModalWrapper onClick={closeAlert}>
            <Modal ref={modalRef}>
                <ModalTitle>
                    {title}
                </ModalTitle>
                <ModalText>
                    {message}
                </ModalText>
                <ModalControls>
                    <Button onClick={closeAlert}>{buttonText}</Button>
                </ModalControls>
            </Modal>
        </ModalWrapper>
    )
}

const Alert = ({ showAlert, title, message, buttonText, onAddAlert }) => {
    const modalRef = useRef(null)
    const closeAlert = (e) => (modalRef.current !== e.target.parentNode && modalRef.current !== e.target) && (onAddAlert(false))
    return showAlert && (
        <>
            {ReactDOM.createPortal(<AlertModal closeAlert={closeAlert} title={title} message={message} buttonText={buttonText} modalRef={modalRef} />, document.getElementById('alert-container'))}
        </>
    )
}

export default Alert