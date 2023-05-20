import './App.css';
import Layout from './components/Layouts';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './containers/Home/index.js';
import SignIn from './containers/SignIn/index.js';
import SignUp from './containers/SignUp/index.js';
import PrivateRoutes from './HOC/privateRoutes';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' exact element={<Home/>}/>
        </Route>
          <Route path='/signIn' exact element={<SignIn/>}/>
        
        
        
        <Route path='/signUp' exact element={<SignUp/>}/>
      </Routes>
     </Router>
    </div>



  );
}

export default App;
