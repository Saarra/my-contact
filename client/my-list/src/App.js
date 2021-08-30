import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContactList from './Components/ContactList/ContactList'
import AddEditContact from './Components/AddEditContact/AddEditContact'
import Home from './Components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <Router>
    <div className="App">
    <Home />
    <Route exact path='/' component={ContactList} />
    <Route path='(/addContact|/editContact)' component={AddEditContact} />
    </div>
    </Router>
    );
}

export default App;
