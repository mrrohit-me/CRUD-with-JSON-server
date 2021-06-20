import Navbar from './components/Navbar' 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AddUsers from './components/AddUsers'
import AllUsers from './components/AllUsers'
import Not_Found from './components/Not_Found'
import EditUser from './components/EditUser'
function App() {
  return (
    <BrowserRouter>
		<Navbar />
		<Switch>
			<Route exact path='/' component={Home}/>
			  <Route exact path='/AddUsers' component={AddUsers} />
			  <Route exact path='/AllUsers' component={AllUsers} />
			  <Route exact path='/EditUser/:id' component={EditUser} />
			  <Route component={Not_Found} />
		</Switch>
    </BrowserRouter>
  );
}

export default App;
