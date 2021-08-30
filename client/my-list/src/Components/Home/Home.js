import {Link} from 'react-router-dom'
import { getContacts, toggleFalse } from '../../redux/actions/ContactActions';
import { useDispatch } from 'react-redux'
import allcontacts from '../../Assets/allcontacts.png'
import addcontact from '../../Assets/add.png'
const Home = () => {
      
    const dispatch = useDispatch()
    return ( 
        <div>
        <Link to='/'>
            <img src={allcontacts} alt=""  width="10%" height="10%" onClick = {() => dispatch(getContacts())}/>
        </Link>
        <Link to='/addContact'>
        <img src={addcontact} alt=""  width="10%" height="10%" onClick= {()=>dispatch(toggleFalse())}/>
        </Link>
        </div>
     );
}
 
export default Home;