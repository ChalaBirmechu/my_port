// pages/api/health.js
export default function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ 
      success: false, 
      error: `Method ${req.method} Not Allowed` 
    });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    success: true,
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Portfolio API'
  });
}