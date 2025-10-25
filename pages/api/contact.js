// pages/api/contact.js or app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log the contact (you can save to a database later)
    console.log('Contact form submission:', { name, email, message });

    // Send email notification (optional)
    // await sendEmail(name, email, message);

    return NextResponse.json({
      success: true,
      message: 'Message received successfully!'
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}