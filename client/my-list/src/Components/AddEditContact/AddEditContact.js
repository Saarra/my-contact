import './AddEditContact.css'
import {Form} from 'react-bootstrap'
import addUser from '../../Assets/add.png'
import updateUser from '../../Assets/update-user.png'
import { useState, useEffect } from 'react';
import { addContact, editContact } from '../../redux/actions/ContactActions';
import { useDispatch,useSelector } from 'react-redux';


const AddEditContact = ({history}) => {
    // state
    const [contact, setContact] = useState({name: "", email:"", age : null})

    const edit=useSelector(state=>state.contactReducer.edit)

    const editcontact = useSelector(state => state.contactReducer.contact)

    // dispatch 
    const dispatch = useDispatch()

    //handelChange 
    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    // useEffect
         useEffect(() => {
              edit ? setContact(editcontact) : setContact({name: "", email:"", age : 0})
          }, [edit, editcontact])                                                                          
    return (
        <Form className='my-form' >
            <br />  
            <Form.Group className="my-little-form">
                <Form.Control type="text"
                    placeholder="Enter contact name ..."
                    name="name"
                    defaultValue={contact.name}
                    onChange = {handleChange}
                />
                <Form.Text className="text-muted">Name is required !!</Form.Text>
            </Form.Group>

            <Form.Group className="my-little-form" >
                <Form.Control type="text"
                placeholder="name@gamil.com ..."
                name="email"
                defaultValue={contact.email}
                onChange = {handleChange}
                />
                <Form.Text className="text-muted">E-mail is required !!</Form.Text>
            </Form.Group>

            <Form.Group >
                <Form.Control type="number"
                    placeholder="Enter contact age ..."
                    name="age"
                    defaultValue={contact.age}
                    onChange = {handleChange}
                />
            <Form.Text className="text-muted">Age is required !!</Form.Text>
            </Form.Group>
         
            {
            edit ?  <img src={updateUser} alt="update" className="update-btn" width='100px'
            onClick={ ()=>{dispatch(editContact(editcontact._id, contact)); history.push('/')}}
            /> : 
              <img src={addUser} alt="add" className="add-btn" width='100px'
              onClick={()=>{dispatch(addContact(contact)); history.push('/')}}
             />
           }
           
          
          
        </Form>
     );
}
 
export default AddEditContact;