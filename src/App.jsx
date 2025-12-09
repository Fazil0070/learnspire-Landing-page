// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Products from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import './index.css'
import LoginPage from './pages/Login.jsx';


function App() {
  return (
    <Router>
      <div className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-black tw-text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;