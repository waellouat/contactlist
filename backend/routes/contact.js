const express = require('express')
const contactSchema = require('../backend/model/contact')
const ContactRouter = express.Router()

// get all users
ContactRouter.get('/getuser',async(req,res)=>{
   try{
    const Contacts = await contactSchema.find()
    res.status(200).send({msg:'this is all users',Contacts})
   }catch(err){
    res.status(500).send('you have no user')
   }
})

// create a user

ContactRouter.post('/adduser',async(req,res)=>{
   try{
    const newContact = await new contactSchema(req.body)
    newContact.save()
    res.status(200).send({msg:'the contact is added',newContact})

   }catch(err){
    res.status(500).send('could not add a user')
   } 
})

// put or update a user

ContactRouter.put('/updateuser/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const editUser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('the user hax been edited')

    }catch(err){
        res.status(500).send('could not modify a user')
    }
})

// delete a user

ContactRouter.delete('/deleteuser/:id',async(req,res)=>{
    try{
     const {id} = req.params
     const deleteUser = await contactSchema.findByIdAndDelete(id)
     res.status(200).send('The user Delete it')

    }catch(err){
        res.status(500).send('could not delete')
    }
})

// get a user by id
ContactRouter.get('/getuser/:id',async(req,res)=>{
    try{
const {id} = req.params
const getUser = await contactSchema.findById(id)
    }catch(err){
        res.status(500).send('could not find a user')
    }
})

module.exports = ContactRouter