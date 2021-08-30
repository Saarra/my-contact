import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact,getContact, toggleTrue } from '../../redux/actions/ContactActions'
import { Link } from 'react-router-dom'
import './ContactCard.css'



const ContactCard = ({contact}) => {
const dispatch = useDispatch()
    return (
<div class="card-container">
	<span class="pro">PRO</span>
	{/* <img class="round" src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png" alt="user" /> */}
	<h3>{contact.name}</h3>
	<h6>{contact.email}</h6>
	<p>Age <br/>{contact.age}</p>
	<div class="buttons">

		<Link to='/editContact'>
		<button class="primary" onClick={() => {dispatch(toggleTrue()); dispatch(getContact(contact._id))}}>
			Edit 
		</button>
		</Link>
		<button class="primary ghost" onClick={()=> dispatch(deleteContact(contact._id))}>
			Delete
		</button>
	</div>
</div>
)}

export default ContactCard