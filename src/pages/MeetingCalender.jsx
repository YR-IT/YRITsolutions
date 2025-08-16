import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import "../styles/MeetingCalender.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendMeetingRequest } from '../helper/emailMeeting';

const MeetingCalender = () => {
    const dates = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"]
    const [date, setDate] = useState(new Date());
    const [selected, setSelected] = useState(-1);
    const [duration, setDuration] = useState("30 minutes");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: ""
    });

    // Toast notifications
    const notifySuccess = () => toast.success("Meeting request sent successfully! Our team will contact you soon.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

    const notifyError = () => toast.error("Failed to send meeting request. Please try again or contact us directly.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

    const notifyValidation = () => toast.warning("Please fill in all required fields.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

    const handleInputChange = (field, value) => {
        setState(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        // Validation
        if (!state.firstName.trim() || !state.lastName.trim() || !state.phone.trim() || !state.email.trim() || !state.company.trim()) {
            notifyValidation();
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(state.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare meeting data
            const meetingData = {
                firstName: state.firstName.trim(),
                lastName: state.lastName.trim(),
                email: state.email.trim(),
                phone: state.phone.trim(),
                company: state.company.trim(),
                timing: dates[selected],
                date: date.toDateString(),
                duration: duration
            };

            console.log("Meeting request data:", meetingData);

            // Send email notification only
            const emailResult = await sendMeetingRequest(meetingData);
            
            if (emailResult.success) {
                notifySuccess();
                
                
                setTimeout(() => {
                    setState({
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        company: ""
                    });
                    setSelected(-1);
                    setDuration("30 minutes");
                    setDate(new Date());
                    
                    
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 2000);
            } else {
                notifyError();
            }

        } catch (error) {
            console.error("Error submitting meeting request:", error);
            notifyError();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
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
                theme="light"
            />
            
            <div className='w-full flex justify-center items-center mt-[2rem] mb-[3rem]'>
                <div className='flex justify-evenly cal-par-box max-[560px]:w-full max-[560px]:overflow-x-hidden'>
                    <div className='bg-[#494E7F] pb-[3rem] px-4 max-[560px]:pl-[6%] flex justify-center flex-col items-center'>
                        <div className='text-[35px] max-[560px]:text-[27px] max-[560px]:mt-2 text-white justify-center align-middle pb-8 text-center font-semibold'>
                            <div className=''>
                                YR IT SOLUTIONS
                            </div>
                            Request a Meeting with YR IT SOLUTIONS
                        </div>
                        <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date} minDate={new Date()} />
                        </div>
                    </div>
                    
                    <div className='max-[1000px]:hidden h-full font-semibold px-[3rem] text-center'>
                        <div className='text-[2rem]'>
                            Meeting Timings
                        </div>
                        <div className='btn mt-4 py-2 cursor-pointer' onClick={() => {
                            if (selected === -1) {
                                toast.warning("Please select a time slot first!");
                                return;
                            }
                            document.querySelector('.form-schedule-main-box').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Continue →
                        </div>
                        
                        <div className='mt-2 flex w-full justify-evenly items-center'>
                            <div className={`border-xl border-black border rounded-md py-1 ${duration === "30 minutes" ? "btn" : ""} px-2 w-[100px] cursor-pointer`} 
                                 onClick={() => setDuration("30 minutes")}>
                                30 min
                            </div>
                            <div className={`border-xl border-black border rounded-md py-1 w-[100px] ${duration === "1 hour" ? "btn" : ""} cursor-pointer`} 
                                 onClick={() => setDuration("1 hour")}>
                                1 hr
                            </div>
                        </div>
                        
                        <div className='font-semibold mt-3 text-left'>
                            What time works best
                        </div>
                        <div className='text-left'>
                            Selected time: <span className='text-[var(--theme)]'>
                                {date.toDateString()}
                            </span>
                        </div>
                        <div className='text-[var(--theme)] mb-6 text-left'>
                            UTC +5:30 India Standard Time
                        </div>
                        
                        <div className='flex flex-col gap-3 max-h-[30rem] overflow-scroll'>
                            {dates.map((item, index) => (
                                <div key={index} 
                                     className={`cursor-pointer px-[6rem] py-[0.2rem] text-center text-[20px] border-[var(--theme)] border-[1px] ${selected === index ? 'bg-[var(--theme)] text-white' : ""}`} 
                                     onClick={() => setSelected(index)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className='min-[1000px]:hidden w-[fit-content] text-[2rem] max-[1000px]:text-[1.5rem] max-[790px]:text-[1.3rem] font-semibold ml-[2%] mb-[10px]'>
                Select Meeting Timings:
            </div>
            
            <div className='min-[1000px]:hidden overflow-y-hidden max-[500px] mx-6 flex relative flex-row gap-3 max-h-[10rem] overflow-x-scroll items-center'>
                {dates.map((item, index) => (
                    <div key={index} 
                         className={`h-[3rem] max-[500px]:text-[15px] max-[500px]:h-[2rem] max-[500px]:pt-1 min-w-[20%] pt-2 cursor-pointer px-[0rem] py-[0.0rem] text-center text-[20px] border-[var(--theme)] border-[1px] ${selected === index ? 'bg-[var(--theme)] text-white' : ""}`} 
                         onClick={() => setSelected(index)}>
                        {item}
                    </div>
                ))}
            </div>

            <div className='min-[1000px]:hidden ml-[2%] flex items-baseline gap-4 justify-start'>
                <div className='min-w-[10rem] w-[fit-content] text-[2rem] max-[1000px]:text-[1.5rem] max-[790px]:text-[1.3rem]'>
                    Meeting Duration:
                </div>
                <div className='mt-2 gap-2 flex w-[fit-content] justify-evenly items-center'>
                    <div className={`mt-4 py-2 max-[500px]:h-[fit-content] max-[500px]:text-[17px] max-[500px]:py-1 cursor-pointer h-[3rem] min-w-[20%] pt-2 px-[0rem] text-center text-[20px] ${duration === "30 minutes" ? "btn" : "border border-black rounded-md border-sm"} px-2 w-[100px]`} 
                         onClick={() => setDuration("30 minutes")}>
                        30 min
                    </div>
                    <div className={`mt-4 py-2 max-[500px]:h-[fit-content] max-[500px]:text-[17px] max-[500px]:py-1 cursor-pointer h-[3rem] min-w-[20%] pt-2 px-[0rem] text-center text-[20px] border-xl border-black border rounded-md py-1 w-[100px] ${duration === "1 hour" ? "btn" : ""}`} 
                         onClick={() => setDuration("1 hour")}>
                        1 hr
                    </div>
                </div>
            </div>

            <div className='min-[1000px]:hidden text-center mt-[1rem]'>
                <div className='text-center'>
                    Selected time: <span className='text-[var(--theme)]'>
                        {date.toDateString()}
                    </span>
                </div>
                <div className='text-[var(--theme)] mb-6 text-center'>
                    UTC +5:30 India Standard Time
                </div>
                <div className='flex w-full justify-center items-center mb-[4rem]'>
                    <div className='btn mt-4 py-2 cursor-pointer' onClick={() => {
                        if (selected === -1) {
                            toast.warning("Please select a time slot first!");
                            return;
                        }
                        document.querySelector('.form-schedule-main-box').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Continue →
                    </div>
                </div>
            </div>

            {/* Form Section */}
            {duration !== "302 minutes" && selected !== -1 && (
                <div className="flex items-center justify-center min-h-screen mt-4 form-schedule-main-box">
                    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl border border-blue-900">
                        <h1 className="text-2xl font-bold mb-4 text-left">Your Information</h1>
                        
                        <div className="space-y-6 pb-[3rem]">
                            <div className='mb-[1rem]'>
                                <div className="flex">
                                    <div className='text-lg font-semibold text-[var(--theme)]'>{dates[selected]}&nbsp;</div>
                                    <div className="text-lg font-semibold text-[var(--theme)]">{date.toDateString()}&nbsp;</div>
                                </div>
                                <div className='font-semibold'>
                                    Meeting Duration: {duration}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">First Name *</label>
                                    <input 
                                        type="text" 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                        placeholder="Enter First Name"
                                        value={state.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Last Name *</label>
                                    <input 
                                        type="text" 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                        placeholder="Enter Last Name"
                                        value={state.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">Phone No. *</label>
                                <input 
                                    type="tel" 
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                    placeholder="Enter Phone No."
                                    value={state.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">E-Mail *</label>
                                <input 
                                    type="email" 
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                    placeholder="Enter E-mail ID"
                                    value={state.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">Company Name *</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                    placeholder="Enter Company Name"
                                    value={state.company}
                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex justify-between">
                                <button 
                                    type="button" 
                                    className="px-10 py-2 bg-white text-gray-700 rounded-md border border-blue-600" 
                                    onClick={() => {
                                        document.querySelector('.cal-par-box').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    disabled={isSubmitting}
                                >
                                    Back
                                </button>
                                <button 
                                    type="button" 
                                    className={`px-10 py-2 bg-[var(--theme)] text-white rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Request Meeting'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MeetingCalender;