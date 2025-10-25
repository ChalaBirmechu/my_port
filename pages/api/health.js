// pages/api/health.js
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const healthStatus = {
      success: true,
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'Portfolio Contact API',
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0'
    };

    console.log('✅ Health check passed');
    
    return res.status(200).json(healthStatus);
  } catch (error) {
    console.error('❌ Health check failed:', error);
    return res.status(500).json({
      success: false,
      status: 'ERROR',
      error: 'Health check failed',
      timestamp: new Date().toISOString()
    });
  }
}