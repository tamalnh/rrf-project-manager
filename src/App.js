import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/layout';
import { Signin, Signup } from './components/auth';
import { Dashboard } from './components/dashboard';
import { ProjectDetails, CreateProject } from './components/projects';

function App() {  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
