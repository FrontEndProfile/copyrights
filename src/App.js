import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home';
import Agreements from './pages/Agreements/Agreements';
import AgreementDetail from './pages/AgreementDetail/AgreementDetail';
import Profile from './pages/profile/Profile';
import Detail from './pages/Detail/Detail';


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
          <Route path="/Agreements" element={<Agreements />}></Route>
          <Route path="/AgreementDetail" element={<AgreementDetail />}></Route>
          <Route path="/Detail" element={<Detail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
