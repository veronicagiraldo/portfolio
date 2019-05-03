import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Foot from './Foot';
import Resume from './Resume';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Challenge from './30day';

// import Frame from './Frame';


class App extends Component {
  render() {
    return (
      <div>
          <Nav /> 
          <Switch>
            <Route exact path = '/' component={Home}/> 
            <Route path = '/about' component={About}/>
            <Route path = '/resume' component={Resume}/>
            <Route path = '/projects' component={Projects}/>
            <Route path = '/skills' component={Skills}/>
            <Route path = '/30day' component={Challenge}/>
          </Switch> 
          <Foot /> 
        
      </div>
    );
  }
}

export default App;
