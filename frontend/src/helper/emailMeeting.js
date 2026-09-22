// src/helper/emailMeeting.js
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_MEETING_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_TO_EMAIL = process.env.REACT_APP_EMAILJS_TO_EMAIL || 'yrut@gmail.com';

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('EmailJS meeting configuration is missing. Check the root .env file.');
}

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send meeting request email
 * @param {Object} meetingData - The meeting data to send
 * @param {string} meetingData.firstName - Client first name
 * @param {string} meetingData.lastName - Client last name
 * @param {string} meetingData.email - Client email
 * @param {string} meetingData.phone - Client phone
 * @param {string} meetingData.company - Client company
 * @param {string} meetingData.timing - Selected meeting time
 * @param {string} meetingData.date - Selected meeting date
 * @param {string} meetingData.duration - Meeting duration
 * @returns {Promise} EmailJS promise
 */
export const sendMeetingRequest = async (meetingData) => {
  try {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      return {
        success: false,
        message: 'EmailJS is not configured. Please add the EmailJS environment variables.',
      };
    }

    const templateParams = {
      client_first_name: meetingData.firstName || 'Not provided',
      client_last_name: meetingData.lastName || 'Not provided',
      client_full_name: `${(meetingData.firstName || '').trim()} ${(meetingData.lastName || '').trim()}`.trim() || 'Not provided',
      client_email: meetingData.email || 'Not provided',
      client_phone: meetingData.phone || 'Not provided',
      client_company: meetingData.company || 'Not provided',
      meeting_time: meetingData.timing || 'Not specified',
      meeting_date: meetingData.date || 'Not specified',
      meeting_duration: meetingData.duration || 'Not specified',
      submission_date: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      }),
      to_email: EMAILJS_TO_EMAIL,
      to_name: 'YR IT Solutions Team'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, message: 'Meeting request sent successfully!', response };
  } catch (error) {
    console.error('Failed to send meeting request email:', error);
    return {
      success: false,
      message: error?.text || error?.message || 'Failed to send meeting request. Please try again or contact us directly.'
    };
  }
};