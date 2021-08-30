const express = require('express')
const { addContact, getAllContacts, deleteContact, updateContact, getOneContact } = require('../controllers/contact')
const router = express.Router()



// @desc add new contact
// @method post 
// @req.body
router.post('/', addContact)

// @desc get all contacts
// @method get
router.get('/', getAllContacts)

// @desc delete contact
// @method delete
// @req.params

router.delete('/:ID', deleteContact)

// @desc update contact
// @methode put
// @req.params
// @req.body
router.put('/:ID', updateContact)

// @desc get contact
// @methode get
// @req.params

router.get('/:ID', getOneContact)



module.exports = router 