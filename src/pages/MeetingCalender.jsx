import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      theme: "dark",
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
      theme: "dark",
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
      theme: "dark",
    }
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (selectedTimeIndex === -1) {
      toast.warning("Please select a time slot first!", { theme: "dark" });
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.", { theme: "dark" });
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
    visible: (i: number) => ({
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
        theme="dark"
        toastClassName="bg-gray-800 text-white"
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden py-16 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              YR IT SOLUTIONS
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
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
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${currentStep === 1 ? 'bg-blue-600' : 'bg-gray-700'} transition-colors duration-300`}>
              <CalendarDays className="w-5 h-5" />
              <span className="text-sm font-medium">Select Time</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${currentStep === 2 ? 'bg-blue-600' : 'bg-gray-700'} transition-colors duration-300`}>
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Your Info</span>
            </div>
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
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                    <CalendarDays className="w-6 h-6 mr-2 text-blue-400" />
                    Select Date
                  </h3>
                  <p className="text-gray-400">Choose your preferred meeting date</p>
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
                  <h4 className="text-lg font-medium mb-4 flex items-center">
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
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {dur}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-700/50 rounded-xl">
                  <p className="text-sm text-gray-300">
                    Selected: <span className="text-blue-400 font-medium">{date.toDateString()}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">UTC +5:30 India Standard Time</p>
                </div>
              </motion.div>

              {/* Time Slots Section */}
              <motion.div
                variants={cardVariants}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                    <Clock className="w-6 h-6 mr-2 text-blue-400" />
                    Available Times
                  </h3>
                  <p className="text-gray-400">Pick your preferred time slot</p>
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
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedTimeIndex === index
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-400'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContinue}
                  disabled={selectedTimeIndex === -1}
                  className={`w-full mt-8 py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                    selectedTimeIndex === -1
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-600/25'
                  }`}
                >
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
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Your Information</h3>
                <p className="text-gray-400">Tell us a bit about yourself</p>
              </div>

              {/* Meeting Summary */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 mb-8 border border-blue-500/30">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  Meeting Details
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Date:</span>
                    <p className="text-blue-400 font-medium">{date.toDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Time:</span>
                    <p className="text-blue-400 font-medium">{timeSlots[selectedTimeIndex]}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <p className="text-blue-400 font-medium">{duration}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your Company Name"
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