import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/> 
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path="/teamDetail/:id">
          <TeamDetail/>
        </Route>
      </Switch>
    
    </Router>

  );
}

export default App;
