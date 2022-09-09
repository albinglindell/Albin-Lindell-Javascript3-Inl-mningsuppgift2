import './App.css';
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Post from "./pages/Post"
import Header from './components/Header';


function App() {
 
 
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
