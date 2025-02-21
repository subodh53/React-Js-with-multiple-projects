import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from "formik"
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from "react-toastify"
import * as Yup from "yup"


const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required")
})
 
function AddAndUpdateContact({isOpen, onClose, isUpdate, contact}) {

  const addContact = async (contact) => {
    try{
        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, contact);
        onClose();
        toast.success("Contact Added Successfully!");
    } catch (error) {
        console.log(error);
    }
  }

  const updateContact = async(contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
        initialValues={ isUpdate ? {
          name: contact.name,
          email: contact.email,
        } : {
          name:"",
          email:"",
        }}
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? updateContact(values, contact.id) : addContact(values);
        }}
        >
            <Form className='flex flex-col gap-4'>
                <div className="flex flex-col">
                    <label htmlFor='name'>name</label>
                    <Field name="name" className="border h-10 rounded-lg "/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor='email'>email</label>
                    <Field type="email" name="email" className="border h-10 rounded-lg"/>
                </div>
                <button className='bg-orange-400 px-3 py-1.5 border rounded-lg self-end'>
                  {isUpdate ? "Update " : "Add "} Contact
                </button>
            </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
