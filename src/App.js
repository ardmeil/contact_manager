import React, { Component } from 'react';
import {HashRouter as Router , Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import Contacts from './components/contact/Contacts'
import About from './pages/About'
import AddContact from './components/contact/AddContact'
import EditContact from './components/contact/EditContact'
import {Provider} from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
            <div className="App">
              <Header name="Contact Manager Apps" />
                <div className="container">
                    <Switch>
                      <Route exact path="/" component={Contacts} />
                      <Route exact path="/contact/add" component={AddContact}  />
                      <Route exact path="/contact/edit/:id" component={EditContact}  />
                      <Route exact path="/about" component={About} />
                      <Route component={NotFound} />


                    </Switch>
                </div>
            </div>
          </Router>
       </Provider>
      );
  }
}

export default App;
