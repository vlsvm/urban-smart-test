import './App.css';
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom"
import Main from './components/Main'
import Profile from './components/Profile'


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route 
        path='/'
        exact
        render={(props) =><Main {...props}/> }
      />
      <Route 
        path='/profile'
        exact
        render={(props) =><Profile {...props}/> }
      />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
