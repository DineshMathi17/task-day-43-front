import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Route } from 'react-router-dom';
import './App.css';
import { Login } from './component/login';
import { Signup } from './component/signup';
import { Forgot } from './component/forgotpassword';
import { Welcome } from './component/welcome';
import { Reset } from './component/newsubmit';
import { Dashboard } from './component/dash';
import { Dashboard2 } from './component/dash2';





function App() {

  return (
    <div className="App">
       <Route exact path='/'>
        < Welcome />
      </Route>

    <Route path='/login'>
      <Login />
    </Route>

    <Route path='/signup'>
      <Signup />
    </Route>

    <Route path="/forgotpassword">
      <Forgot />
    </Route>

    <Route path='/dashboard'>
      < Dashboard />
    </Route>
    <Route path='/dashboard2'>
      < Dashboard2 />
    </Route>

    <Route path="/resetpassword/:id/:token">
      <Reset />
    </Route>
   
  </div>
  );
}

export default App;
