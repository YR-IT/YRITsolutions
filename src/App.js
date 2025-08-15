import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import WhyChooseUs from './pages/WhyChooseUs';
import Delivers from './pages/Delivers';
import ClientReview from './pages/ClientReview';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import BannerBottom from './pages/BannerBottom';
import { Footer } from './pages/Footer';
import CopyrightBanner from './pages/CopyrightBanner';
import PricingMain from './pages/PricingMain';
import Navbar from './pages/Navbar';
import Form from './pages/Form';
import MeetingForm from './pages/MeetingForm';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Portfolio from './pages/Portfolio'; 
import Blog from './pages/Blog';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [state, setState] = React.useState(0);
  const [show, setshow] = React.useState(false);

  return (
    <>
    
      {/* Fixed Navbar */}
      <Navbar 
        state={state} 
        setState={setState} 
        setshow={setshow} 
        show={show} 
      />
      
      {/* Main Content Container */}
      <div className={`min-h-screen flex flex-col overflow-hidden ${show ? "h-screen overflow-hidden" : ""}`}>
        
        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/ourservices" element={<Services />} />
            <Route path="/pricing" element={<PricingMain />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/form" element={<Form />} />
            <Route path="/meetingform" element={<MeetingForm />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsOfUse />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="w-full mt-auto">
          <Footer 
            state={state} 
            setState={setState}
          />
          <CopyrightBanner />
        </footer>
      </div>
    </>
  );
}

export default App;
