import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function sendContactNotification(name, email, message) {
  try {
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
