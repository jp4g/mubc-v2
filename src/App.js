import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'

import Advisers from './pages/Advisers'
import Blockathon2019 from './pages/Blockathon2019'
import Conference2019 from './pages/Conference2019'
import Conference2020 from './pages/Conference2020'
import Exec from './pages/Exec'
import Home from './pages/Home'
import Learning from './pages/Learning'
import Media from './pages/Media'
import Partners from './pages/Partners'
import PastExec from './pages/Past-Exec'
import Register from './pages/Register'
import Sponsors from './pages/Sponsors'
import Workshops from './pages/Workshops'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exec" component={Exec} />
          <Route path="/past-exec" component={PastExec} />
          <Route path="/advisers" component={Advisers} />
          <Route path="/conference2020" component={Conference2020} />
          <Route path="/conference2019" component={Conference2019} />
          <Route path="/blockathon2019" component={Blockathon2019} />
          <Route path="/media" component={Media} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/online-learning" component={Learning} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/partners" component={Partners} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
