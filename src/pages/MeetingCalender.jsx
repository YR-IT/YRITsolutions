import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/MeetingCalender.css';
import { useTheme } from '../contexts/ThemeContext';
import { 
  CalendarDays, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const MeetingCalendar = () => {
  const { isDarkMode } = useTheme();
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"
  ];

  const [date, setDate] = useState(new Date());
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(-1);
  const [duration, setDuration] = useState("30 minutes");
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: ""
  });

  const notifySuccess = () => toast.success(
    "🎉 Meeting request sent successfully! Our team will contact you soon.",
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    }
  );

  const notifyError = () => toast.error(
    "❌ Failed to send meeting request. Please try again.",
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    }
  );

  const notifyValidation = () => toast.warning(
    "⚠️ Please fill in all required fields.",
    {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    }
  );

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (selectedTimeIndex === -1) {
      toast.warning("Please select a time slot first!", { theme: isDarkMode ? "dark" : "light" });
      return;
    }
    setCurrentStep(2);
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || 
        !formData.phone.trim() || !formData.email.trim() || !formData.company.trim()) {
      notifyValidation();
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.", { theme: isDarkMode ? "dark" : "light" });
      return;
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/; 
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number (e.g., +15551234567).", { theme: isDarkMode ? "dark" : "light" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      notifySuccess();
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          company: ""
        });
        setSelectedTimeIndex(-1);
        setDuration("30 minutes");
        setDate(new Date());
        setCurrentStep(1);
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting meeting request:", error);
      notifyError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const timeSlotVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode ? 'bg-blue-400/30' : 'bg-blue-600/20'
            }`}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
              : 'bg-gradient-to-r from-blue-300/10 to-purple-300/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' 
              : 'bg-gradient-to-r from-purple-300/10 to-pink-300/10'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
        toastClassName={isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden pt-24 pb-16 px-4 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'backdrop-blur-sm bg-gradient-to-r from-blue-600/10 to-purple-600/10' 
            : 'bg-transparent'
        }`}></div>
        
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 blur-xl ${
          isDarkMode 
            ? 'opacity-50 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20' 
            : 'opacity-0'
        }`}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center mb-6 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-blue-400 mr-3 drop-shadow-lg" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              YR IT SOLUTIONS
              {/* Glowing text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-bold text-blue-400/20 blur-sm -z-10">
                YR IT SOLUTIONS
              </div>
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`text-xl md:text-2xl mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Schedule Your Meeting with Our Experts
          </motion.p>
          
          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <motion.div 
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-500 ${
                currentStep === 1 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-400/50 shadow-lg shadow-blue-500/25' 
                  : isDarkMode 
                    ? 'bg-gray-800/50 border-gray-600/50 backdrop-blur-sm' 
                    : 'bg-white/50 border-gray-300/50 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CalendarDays className="w-5 h-5" />
              <span className="text-sm font-medium">Select Time</span>
            </motion.div>
            <motion.div 
              className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ scaleX: currentStep === 2 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-500 ${
                currentStep === 2 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-400/50 shadow-lg shadow-blue-500/25' 
                  : isDarkMode 
                    ? 'bg-gray-800/50 border-gray-600/50 backdrop-blur-sm' 
                    : 'bg-white/50 border-gray-300/50 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Your Info</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: -20 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 pb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <motion.div
                variants={cardVariants}
                className={`relative backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border shadow-2xl group overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-black/60 border-gray-600/30' 
                    : 'bg-gradient-to-br from-white/80 via-gray-50/60 to-white/80 border-gray-200/50'
                }`}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Floating particles inside card - behind calendar */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                      animate={{
                        x: [0, Math.random() * 300],
                        y: [0, Math.random() * 200],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                    />
                  ))}
                </div>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-semibold mb-2 flex items-center justify-center ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <CalendarDays className="w-6 h-6 mr-2 text-blue-400" />
                    Select Date
                  </h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Choose your preferred meeting date</p>
                </div>
                
                <div className="calendar-wrapper flex justify-center">
                  <Calendar 
                    onChange={setDate} 
                    value={date} 
                    minDate={new Date()}
                    className="modern-calendar"
                    tileClassName="calendar-tile"
                  />
                </div>

                {/* Duration Selection */}
                <div className="mt-8">
                  <h4 className={`text-lg font-medium mb-4 flex items-center ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Clock className="w-5 h-5 mr-2 text-blue-400" />
                    Meeting Duration
                  </h4>
                  <div className="flex space-x-4">
                    {["30 minutes", "1 hour"].map((dur) => (
                      <motion.button
                        key={dur}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setDuration(dur)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          duration === dur 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                            : isDarkMode 
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {dur}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className={`mt-6 p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
                }`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Selected: <span className="text-blue-400 font-medium">{date.toDateString()}</span>
                  </p>
                  <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>UTC +5:30 India Standard Time</p>
                </div>
              </motion.div>

              {/* Time Slots Section */}
              <motion.div
                variants={cardVariants}
                className={`relative backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border shadow-2xl group overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-black/60 border-gray-600/30' 
                    : 'bg-gradient-to-br from-white/80 via-gray-50/60 to-white/80 border-gray-200/50'
                }`}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Floating particles inside card - behind buttons */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                      animate={{
                        x: [0, Math.random() * 300],
                        y: [0, Math.random() * 200],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                    />
                  ))}
                </div>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-semibold mb-2 flex items-center justify-center ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Clock className="w-6 h-6 mr-2 text-blue-400" />
                    Available Times
                  </h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Pick your preferred time slot</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                  {timeSlots.map((time, index) => (
                    <motion.button
                      key={index}
                      custom={index}
                      variants={timeSlotVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTimeIndex(index)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                        selectedTimeIndex === index
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-400/50 scale-105'
                          : isDarkMode 
                            ? 'bg-gray-800/50 text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white hover:scale-105 border border-gray-600/30'
                            : 'bg-gray-100/80 text-gray-700 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300/50'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContinue}
                  disabled={selectedTimeIndex === -1}
                  className={`relative w-full mt-8 py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-500 overflow-hidden ${
                    selectedTimeIndex === -1
                      ? isDarkMode 
                        ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-600/30'
                        : 'bg-gray-200/50 text-gray-400 cursor-not-allowed border border-gray-300/30'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-blue-600/25 hover:shadow-purple-600/25'
                  }`}
                >
                  {selectedTimeIndex !== -1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
                  )}
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 pb-16"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`relative backdrop-blur-xl rounded-3xl p-8 border shadow-2xl group overflow-hidden ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-black/60 border-gray-600/30' 
                  : 'bg-gradient-to-br from-white/80 via-gray-50/60 to-white/80 border-gray-200/50'
              }`}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Floating particles inside card - behind form */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400/40 rounded-full"
                    animate={{
                      x: [0, Math.random() * 400],
                      y: [0, Math.random() * 300],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                  />
                ))}
              </div>
              <div className="text-center mb-8">
                <h3 className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Your Information</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Tell us a bit about yourself</p>
              </div>

              {/* Meeting Summary */}
              <div className={`rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                  : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50 border-blue-300/50'
              }`}>
                <h4 className={`text-lg font-semibold mb-3 flex items-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  Meeting Details
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Date:</span>
                    <p className="text-blue-400 font-medium">{date.toDateString()}</p>
                  </div>
                  <div>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Time:</span>
                    <p className="text-blue-400 font-medium">{timeSlots[selectedTimeIndex]}</p>
                  </div>
                  <div>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Duration:</span>
                    <p className="text-blue-400 font-medium">{duration}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <User className="w-4 h-4 inline mr-2" />
                      First Name *
                    </label>
                    <motion.input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full p-4 border rounded-xl transition-all duration-300 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50' 
                          : 'bg-white/80 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white'
                      }`}
                      placeholder="Enter your first name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Last Name *
                    </label>
                    <motion.input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full p-4 border rounded-xl transition-all duration-300 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50' 
                          : 'bg-white/80 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white'
                      }`}
                      placeholder="Enter your last name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full p-4 border rounded-xl transition-all duration-300 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50' 
                        : 'bg-white/80 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white'
                    }`}
                    placeholder="your.email@company.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <motion.input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full p-4 border rounded-xl transition-all duration-300 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50' 
                        : 'bg-white/80 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white'
                    }`}
                    placeholder="+1 (555) 123-4567"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Building className="w-4 h-4 inline mr-2" />
                    Company Name *
                  </label>
                  <motion.input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`w-full p-4 border rounded-xl transition-all duration-300 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50' 
                        : 'bg-white/80 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white'
                    }`}
                    placeholder="Your Company Name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 py-4 px-6 bg-gray-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-600 transition-colors duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Request Meeting</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MeetingCalendar;