import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

export async function sendContactNotification(name, email, message) {
  try {
    // Check if required environment variables are present
    if (!accountSid || !authToken || !twilioPhoneNumber || !myPhoneNumber) {
      console.log('Twilio credentials not configured');
      return false;
    }

    const client = twilio(accountSid, authToken);
    
    const smsMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Message: ${message}
    `.trim();

    const response = await client.messages.create({
      body: smsMessage,
      from: twilioPhoneNumber,
      to: myPhoneNumber
    });

    console.log('SMS sent successfully:', response.sid);
    return true;
  } catch (error) {
    console.error('Error sending SMS:', error);
    return false;
  }
}