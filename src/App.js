import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Account from './routes/Account';
import Reminder from './routes/Reminder';
import Connections from './routes/Connections';

function App() {
  const adminUser = {
    email: 'yc3346@nyu.com',
    username: 'Ray',
    password: 'yc3346',
  };

  const [user, setUser] = useState({ username: '', email: '', password: '' });
  let navigate = useNavigate();

  const LoginFunc = (details) => {
    setUser(adminUser);
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
          element={<Account user={user} LogoutFunc={LogoutFunc} />}
        />
        <Route exact path="connections" element={<Connections />} />
      </Routes>
    </div>
  );
}

export default App;
