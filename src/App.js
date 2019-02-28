import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import JokesContent from './JokesContent';
import ToDoContent from './ToDoContent';
import ProductsContent from './ProductsContent';
import MyInfoContent from './MyInfoContent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />

          <div>
            <Route exact path="/jokes" component={JokesContent} />
            <Route exact path="/todo" component={ToDoContent} />
            <Route exact path="/products" component={ProductsContent} />
            <Route exact path="/myinfo" component={MyInfoContent} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
