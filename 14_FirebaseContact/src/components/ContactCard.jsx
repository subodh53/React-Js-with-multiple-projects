import React from 'react'
import { IoMdTrash } from "react-icons/io"
import { RiEditCircleLine } from "react-icons/ri"
import { HiOutlineUserCircle } from "react-icons/hi"
import { db } from '../config/firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import AddAndUpdateContact from './AddAndUpdateContact'
import { useState } from 'react'
import useDisclose from '../hooks/useDisclose'
import { toast } from 'react-toastify'

function ContactCard({contact}) {
  const {isOpen, onClose, onOpen} = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className='bg-yellow-200 flex justify-between items-center p-2 rounded-lg' key={contact.id}>
        <div className='flex gap-1'>
            <HiOutlineUserCircle className='text-orange-400 text-4xl'/>
            <div className=''>
                <h2 className='font-medium'>{contact.name}</h2>
                <p className='text-sm'>{contact.email}</p>
            </div>
        </div>
        <div className='flex text-2xl'>
            <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
            <IoMdTrash onClick={() => deleteContact(contact.id)} className='text-orange-400 cursor-pointer'/>
        </div>
    </div>
    <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard
