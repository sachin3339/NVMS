

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/daashboard/Dashboard';
import SignIn from './pages/signIn/SignIn'


function App() {
  return (
    <>
    <Router>
    <Switch>
         <Route exact path='/'>
         <SignIn />
         </Route>
        
         <Route path='/dashboard'>
          <Dashboard/>
         </Route>
         
      </Switch>
   
    </Router>
   
    
    </>
  );
}

export default App;
