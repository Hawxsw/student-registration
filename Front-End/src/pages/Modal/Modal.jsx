import React from 'react';
import { ModalBackground, ModalContent } from './Style/ModalStyle'

export default function Modal({ isOpen, children, onClose }) {
    return (
        <ModalBackground isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalBackground>
    )
}