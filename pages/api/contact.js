// pages/api/contact.js
export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Only POST requests are accepted.' 
    });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({
        success: false,
        error: 'Name must be between 2 and 50 characters'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({
        success: false,
        error: 'Message must be between 10 and 1000 characters'
      });
    }

    // Log the submission (in production, you'd save to a database or send email)
    console.log('📧 Contact form submission received:', { 
      name, 
      email, 
      message: message.substring(0, 100) + '...' 
    });

    // Simulate some processing time (like sending email)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Contact API error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
}

// Configure the API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    responseLimit: false,
  },
};