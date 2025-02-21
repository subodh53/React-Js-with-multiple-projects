import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom'

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
        {isOpen && (
            <>
            <div className=' m-auto z-50 relative min-h-[200px] max-w-[80%] p-4 bg-white'>
                <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} className='self-end text-2xl'/>
                </div>
                {children}
            </div>
            <div onClick={onClose} className=' absolute top-0 z-40 backdrop-blur h-screen w-screen'/>
            </>
        )}
    </>
  , document.getElementById("modal-root"))
}

export default Modal
