import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button.jsx'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const ContactForm = () => {
  return (
    <section className={styles.container}>
       <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"}/>}/>
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={"24px"}/>}/>
        </div>
        <Button 
        isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize={"24px"}/>}/>
        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" id="" />
          </div>
        </form>
        <div className={styles.contactImage}>
        </div>
       </div>
    </section>
  )
}

export default ContactForm
