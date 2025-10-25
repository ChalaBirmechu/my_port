// In your server code (e.g., server.js or a dedicated routes file)
app.get('/api/health', (req, res) => {
  // You could add checks for database connectivity here in the future
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'My Portfolio Backend',
    environment: process.env.NODE_ENV || 'development'
  });
});