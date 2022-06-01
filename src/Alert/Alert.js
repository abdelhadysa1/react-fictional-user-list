import React from 'react'
import { ModalWrapper, Modal, ModalText, ModalTitle, ModalControls } from '../UI/Modal'
import Button from '../UI/Button'

const Alert = ({ showAlert, title, message, buttonText, onAddAlert }) => {
    const closeAlert = (e) => {
        onAddAlert(false)
    }
    return showAlert && (
        <ModalWrapper onClick={closeAlert}>
            <Modal>
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

export default Alert