import React from 'react'
import CardContact from './CardContact'
import {setContacts} from '../store/ContactSlice'
import {useDispatch,useSelector} from 'react-redux'



const ListContact = () => {
const dipsatch = useDispatch()
const contacts = useSelector(state=>state.contact)

    return (
    <div>
        {
            contacts.map((e)=> ( <CardContact contact={e}  />))
        }
        
      
    </div>
  )
}

export default ListContact
