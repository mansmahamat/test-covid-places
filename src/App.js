import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from './container/Map';
import Header from './components/Header'
import CaseCovid from './components/CaseCovid';



function App() {
  
  return (
    <div className="App bg-gray-900 ">
       <Router>
      <Header />
      
      <Route path="/" exact>
          <Map />
      </Route>
      <Route path="/cas" >
        <CaseCovid/>
      </Route>
    </Router>    
    </div>
  );
}

export default App;
