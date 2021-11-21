import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Account from './routes/Account';
import Connections from './routes/Connections';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="account" element={<Account />} />
        <Route exact path="connections" element={<Connections />} />
      </Routes>
    </div>
  );
}

export default App;
