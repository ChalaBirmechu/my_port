# 🚀 Portfolio Setup Guide

## Quick Start

### Option 1: Use the Batch Script (Windows)
```bash
# Double-click start-dev.bat or run:
start-dev.bat
```

### Option 2: Manual Setup

#### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (frontend + backend)
npm run install-all
```

#### 2. Start Development Servers
```bash
# Start both servers simultaneously
npm run dev

# OR start them separately:
# Backend (Terminal 1)
npm run server

# Frontend (Terminal 2) 
npm run client
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📁 Project Structure

```
my_port/
├── my_port/              # React Frontend
│   ├── src/
│   │   ├── components/   # React Components
│   │   ├── App.jsx       # Main App Component
│   │   └── main.jsx     # Entry Point
│   ├── public/
│   │   └── images/      # Portfolio Images
│   └── package.json
├── server/               # Node.js Backend
│   ├── server.js        # Main Server File
│   ├── package.json
│   └── env.example      # Environment Variables Template
├── package.json         # Root Package.json
└── start-dev.bat       # Windows Startup Script
```

## 🔧 Configuration

### Backend Environment Variables
Create `server/.env` file:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend Environment Variables
Create `my_port/.env` file:
```env
VITE_API_URL=http://localhost:5000
```

## 🖼️ Images

The portfolio uses placeholder images from placeholder.com. To use your own images:

1. Place images in `my_port/public/images/`
2. Update image paths in components:
   - `Hero.jsx` - Profile photo
   - `About.jsx` - About photo  
   - `Projects.jsx` - Project screenshots
   - `Experience.jsx` - Company photo

## 🚀 Features

### Frontend Features
- ✅ Responsive Design
- ✅ Dark/Light Theme Toggle
- ✅ Smooth Animations (Framer Motion)
- ✅ Interactive Navigation
- ✅ Contact Form
- ✅ Loading States
- ✅ Back to Top Button

### Backend Features
- ✅ RESTful API
- ✅ Contact Form Processing
- ✅ Email Notifications
- ✅ Database Integration (MongoDB)
- ✅ Security Middleware
- ✅ Rate Limiting
- ✅ Input Validation

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start both servers
npm run server       # Start backend only
npm run client       # Start frontend only

# Installation
npm run install-all  # Install all dependencies

# Production
npm run build        # Build frontend
npm start           # Start production server
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill processes on ports 3000 and 5000
   npx kill-port 3000 5000
   ```

2. **Module Not Found Errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **MongoDB Connection Issues**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Use MongoDB Atlas for cloud database

4. **Email Not Working**
   - Configure email credentials in `.env`
   - Use Gmail App Password for Gmail
   - Check spam folder for test emails

## 📱 Mobile Testing

The portfolio is fully responsive. Test on different screen sizes:
- Mobile: 375px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `my_port/dist` folder
3. Set environment variables

### Backend (Heroku/Railway)
1. Deploy `server` directory
2. Set environment variables
3. Configure MongoDB connection

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check environment variables

## 🎯 Next Steps

1. Replace placeholder images with real photos
2. Update personal information in `server/server.js`
3. Configure email service for contact form
4. Add your actual project repositories
5. Customize colors and styling
6. Deploy to production

---

**Happy Coding! 🚀**

