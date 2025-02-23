import { NextResponse } from 'next/server';
import connectDB from '../../lib/db';
import Contact from '../../models/contact';
import { sendContactNotification } from '../../lib/twilio';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({
        message: "Please fill in all fields",
        success: false,
      }, { status: 400 });
    }

    console.log('Attempting to connect to MongoDB...');
    await connectDB();
    console.log('Connected to MongoDB successfully');

    const contact = await Contact.create({
      name,
      email,
      message,
    });
    console.log('Contact created:', contact);

    // Send SMS notification
    await sendContactNotification(name, email, message);

    return NextResponse.json({
      message: "Message sent successfully!",
      success: true,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Check for specific MongoDB connection errors
    if (error.name === 'MongooseServerSelectionError') {
      return NextResponse.json({
        message: "Database connection error. Please try again later.",
        success: false,
      }, { status: 500 });
    }

    return NextResponse.json({
      message: "Failed to send message. Please try again.",
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
