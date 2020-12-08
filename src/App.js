import Mainpage from './mainpage/mainpage';
import SignIn from './signin/signin';
import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {ProviderAuth} from './config/auth-context';

function App() {
  return (
    <div> 
    <ProviderAuth>
      <Router>
      <Switch>
         <Route exact path="/"><SignIn/></Route>
         <Route path="/mainpage"><div className="App"><Mainpage/></div></Route>
      </Switch>
      </Router>
      </ProviderAuth>
    </div>
  );
}

export default App;
