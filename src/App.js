import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Account from './routes/Account';
import Connections from './routes/Connections';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const [user, setUser] = useState({ username: '', email: '' });
  let navigate = useNavigate();

  const LoginFunc = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({ username: details.email, email: details.email });
      navigate('/account');
    } else {
      console.log('Faill');
    }
  };

  const LogoutFunc = () => {
    setUser({ username: '', email: '' });
    navigate('/');
  };

  return (
    <div className="App">
      <NavigationBar username={user.username} />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login LoginFunc={LoginFunc} />} />
        <Route exact path="signup" element={<Signup />} />
        <Route
          exact
          path="account"
          element={<Account LogoutFunc={LogoutFunc} />}
        />
        <Route exact path="connections" element={<Connections />} />
      </Routes>
    </div>
  );
}

export default App;
