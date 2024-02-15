import { Router, Route, } from 'react-router-dom';
import LoginPage from './Components/Assets/LoginPage/LoginPage';

function App() {
  return (
    <Router>
        <Route path="/login" component={LoginPage} />
  
    </Router>
  );
}

export default App;


//http://localhost:3000/LoginPage
//http://localhost:3000/index