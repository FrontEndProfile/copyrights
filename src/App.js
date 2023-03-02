import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <>
      <Router>

        {/* <div>
          <ul>
            <li>
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li>
              <Link className="nav-link" to='/Profile'>Profile</Link>

            </li>
          </ul>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
