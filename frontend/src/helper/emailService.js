import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('EmailJS configuration is missing. Check the root .env file.');
}

emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send form data via email
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Client name
 * @param {string} formData.email - Client email
 * @param {string} formData.phone - Client phone
 * @param {string} formData.company - Client company
 * @param {string} formData.message - Client message
 * @param {string} formData.service - Selected service
 * @returns {Promise} EmailJS promise
 */
export const sendClientRequest = async (formData) => {
  try {
    const templateParams = {
      name: formData.name || 'Not provided',
      client_name: formData.name || 'Not provided',
      client_email: formData.email || 'Not provided',
      client_phone: formData.phone || 'Not provided',
      client_company: formData.company || 'Not provided',
      selected_service: formData.service || 'Not specified',
      client_message: formData.message || 'No message provided',
      submission_date: new Date().toLocaleString(),
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: error?.text || error?.message || 'Failed to send email. Please try again.' };
  }
};