import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Results from './Views/Results'
import Standings from './Views/Standings'

function App() {
  return (
    <div className="static min-h-screen pb-10 text-gray-200 bg-gray-800">
      <Router>
        <Header />
        <div className="p-3 pt-20">
          <Switch>
            <Route exact path="/" children={<Home />}>
              <Home />
            </Route>
            <Route path="/standings" children={<Standings />}>
              <Standings />
            </Route>
            <Route path="/about" children={<About />}>
              <About />
            </Route>
            <Route exact path="/results/:seasonId/:resultsId/" children={<Results />}>
              <Results />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
