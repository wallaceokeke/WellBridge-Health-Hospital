import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import EmergencyButton from './components/EmergencyButton';
import { BookingProvider } from './context/BookingContext';
import { JobsProvider } from './context/JobsContext';

function App() {
  return (
    <BookingProvider>
      <JobsProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
            <Footer />
            <BookingModal />
            <EmergencyButton />
            <Toaster position="top-right" />
          </div>
        </Router>
      </JobsProvider>
    </BookingProvider>
  );
}

export default App;