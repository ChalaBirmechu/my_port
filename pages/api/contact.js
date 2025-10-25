// pages/api/contact.js
export default async function handler(req, res) {
  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ 
      success: false, 
      error: `Method ${req.method} Not Allowed` 
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

    // Log the submission
    console.log('📧 Contact form submission:', { 
      name, 
      email, 
      message: message.substring(0, 100) + '...' 
    });

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 500));

    // Success response with CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Contact API error:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}