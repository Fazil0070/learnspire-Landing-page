// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Product'
import Contact from './pages/Contact'
import Header from './components/Header'
import './index.css'
import LoginPage from './pages/Login';

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