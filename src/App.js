import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
