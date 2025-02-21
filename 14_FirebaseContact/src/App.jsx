import './App.css'
import Navbar from './components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore"
import { db } from './config/firebase'
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclose from './hooks/useDisclose'
import { ToastContainer, toast } from 'react-toastify';
import NotFound from './components/NotFound'

 
function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactList);
          return contactList;
        })
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts")

      onSnapshot(contactsRef, (snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
      setContacts(filteredContacts);
      return filteredContacts;
    })
  }


    return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar/>
        <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
          <FiSearch className='text-white text-2xl absolute ml-1'/>
          <input onChange={filterContacts} type="text" className='bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9'/>
        </div>
          <AiFillPlusCircle onClick={onOpen} className='text-white cursor-pointer text-5xl '/>
        </div>
        <div className='mt-4 gap-3 flex flex-col'>
          {
            contacts.length <= 0 ? <NotFound/> : 
            contacts.map(contact =>
              <ContactCard key={contact.id} contact={contact}/>
            )
          }
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App
