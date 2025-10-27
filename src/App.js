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
import HorizontalNavbar from './components/HorizontalNavbar';
import Form from './pages/Form';
import MeetingForm from './pages/MeetingForm';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Portfolio from './pages/Portfolio'; 
import Blog from './pages/Blog';
import { Routes, Route } from 'react-router-dom';
import AddBlog from "./pages/admin/AddBlog";
import Team from './pages/Team';
import { ThemeProvider } from './contexts/ThemeContext';
import WebApps from './components/solutions/WebApps';
import MobileApps from './components/solutions/MobileApps';
import UIUXDesign from './components/solutions/UIUXDesign';
import DigitalMarketing from './components/solutions/DigitalMarketing';
import CyberSecurity from './components/solutions/CyberSecurity';
import DataScience from './components/solutions/DataScience';
import Career from './pages/Carrer';
import MeetingCalendar from './pages/MeetingCalender';
import ScrollToTop from './components/ScrollToTop';
import HireFrontendDev from './hire-resources/HireFrontendDev';
import HireIOSDeveloper from './hire-resources/HireIOSDeveloper';
import HireAndroidDeveloper from './hire-resources/HireAndroidDeveloper';
import HireFlutterDeveloper from './hire-resources/HireFlutterDeveloper';
import HireMobileDeveloper from './hire-resources/HireMobileDeveloper';
import HireSoftwareDeveloper from './hire-resources/HireSoftwareDeveloper';
import HireBackend from './hire-resources/HireBackend';
import ManageBlog  from './pages/admin/manageblogs';
import ManageCareer from './pages/admin/managecareer';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './pages/admin/adminpanel';
import Login from './pages/login';
import ManagePortfolios from './pages/admin/manageportfolios';

function App() {
  const [state, setState] = React.useState(0);
  const [show, setshow] = React.useState(false);

  return (
    <ThemeProvider>
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
            <Route path="/webapps" element={<WebApps />} />
            <Route path="/mobileapps" element={<MobileApps />} />
            <Route path="/uiuxdesign" element={<UIUXDesign />} />
            <Route path="/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Career/>} />
            <Route path="/schedule-meeting" element={<MeetingCalendar />} />
            <Route path="/hire-frontend" element={<HireFrontendDev />} />
            <Route path="/hire-ios-developer" element={<HireIOSDeveloper />} />
            <Route path="/hire-android-developer" element={<HireAndroidDeveloper />} />
            <Route path="/hire-flutter-developer" element={<HireFlutterDeveloper />} />
            <Route path="/hire-mobile-developer" element={<HireMobileDeveloper />} />
            <Route path="/hire-software-developer" element={<HireSoftwareDeveloper />} />
            <Route path="/hire-backend" element={<HireBackend />} />
            <Route path ="/login" element ={<Login/>}/>
            <Route path="/adminpanel" element={<ProtectedRoute/>} >
    
              <Route path="manageblog" element={<ManageBlog />} />
              <Route path="managecareers" element={<ManageCareer />} />
              <Route path="addblog" element={<AddBlog />} />
              <Route path="manageportfolios" element={<ManagePortfolios />} />
            </Route>

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
      
      {/* Scroll to Top Button - Available on all pages */}
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
