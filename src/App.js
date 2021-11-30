import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Account from './routes/Account';
import Reminder from './routes/Reminder'
import Connections from './routes/Connections';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const [user, setUser] = useState({ username: '', email: '' });
  let navigate = useNavigate();

  const LoginFunc = (details) => {
      setUser({ username: details.email, email: details.email });
      navigate('/account');
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
        <Route exact path="reminder" element={<Reminder />} />
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
