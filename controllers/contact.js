const Contact = require('../models/Contact')


exports.addContact = async(req, res) => {
    const {name,email,age}=req.body
   
    try {
        const contact = await Contact.findOne({email})
        if(contact)
            return res.status(400).send({msg : "contact exist"})
        const newContact = new Contact({
            name,email,age
        })
        
      await  newContact.save()
        res.status(200).send({msg:"contact added",newContact})
    } catch (error) {
        res.status(500).send({msg:"impossible to add contact",error})
    }
}

exports.getAllContacts = async(req, res) => {
    try {
        const contacts = await Contact.find() 
        res.status(200).send({msg: 'All Contacts', contacts})
    } catch (error) {
        res.status(500).send({msg:"impossible to get contacts",error})
    }
}

exports.deleteContact =  async(req, res)=>{
    const {ID} = req.params
    try {
        const contact = await Contact.findByIdAndDelete(ID)
        res.status(200).send({msg : 'contact deleted'})
    } catch (error) {
        res.status(500).send({msg:"impossible to delete contact",error})
    }
}

exports.updateContact = async(req, res)=> {
    const {ID} = req.params
    try {
        await Contact.findByIdAndUpdate(ID, {$set: {...req.body}})
        res.status(200).send({msg: 'contact updated'})
    } catch (error) {
        res.status(500).send({msg:"impossible to update contact",error})
    }
}

exports.getOneContact =  async(req, res) => {
    const {ID} = req.params
    try {
        const contact = await Contact.findById(ID)
        res.status(200).send({msg: 'Contact', contact})
    } catch (error) {
        res.status(500).send({msg:"impossible to gzt contact",error})
    }
}