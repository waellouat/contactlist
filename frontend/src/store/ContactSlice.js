import {createSlice} from '@reduxjs/toolkit'


const contactSlice = createSlice({
    name:'contact',
    initialState:[{
        id:Math.random(),
        name:'firas',
        age:'24',
        email:'firas@gmail.com'
    }],
    reducers:{
        addContact:(state,action)=>{
            const newContact={
                id:Math.random(),
                ...action.payload
            }
            return [...state,newContact]
        },

        

        setContacts:(state,action)=>{
return action.payload
        }
    }
})


export const {setContacts,addContact} = contactSlice.actions

export default contactSlice.reducer 