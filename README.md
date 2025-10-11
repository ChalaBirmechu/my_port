# Chala Birmechu - Portfolio Website

A modern, responsive portfolio website showcasing full-stack and mobile development projects. Built with React frontend and Node.js/Express backend.

## 🚀 Features

### Frontend (React + Vite)
- **Modern UI Components**: Built with React and styled with CSS modules
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Contact Form**: Functional contact form with validation
- **Loading States**: Beautiful loading spinner and transitions
- **SEO Optimized**: Meta tags and semantic HTML structure

### Backend (Node.js + Express)
- **RESTful API**: Clean API endpoints for portfolio data and contact form
- **Database Integration**: MongoDB with Mongoose for contact message storage
- **Email Service**: Nodemailer integration for contact form notifications
- **Security**: Helmet.js, CORS, rate limiting, and input validation
- **Error Handling**: Comprehensive error handling and logging
- **Environment Configuration**: Configurable via environment variables

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **Axios** - HTTP client
- **React Intersection Observer** - Scroll animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service
- **Helmet.js** - Security middleware
- **Express Rate Limit** - Rate limiting
- **Express Validator** - Input validation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my_port
```

### 2. Install Frontend Dependencies
```bash
cd my_port
npm install
```

### 3. Install Backend Dependencies
```bash
cd ../server
npm install
```

### 4. Environment Configuration

#### Backend Environment Variables
Create a `.env` file in the `server` directory:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

#### Frontend Environment Variables
Create a `.env` file in the `my_port` directory:
```env
VITE_API_URL=http://localhost:5000
```

### 5. Add Images
Place the following images in `my_port/public/images/`:
- `photo_2.jpg` - Hero section profile photo
- `ch.png` - About section profile photo
- `ecom.jpg` - E-commerce project screenshot
- `mob app.jpg` - Mobile app project screenshot
- `social.jpg` - Social networking project screenshot
- `photo.jpg` - Inventory management project screenshot
- `oict solutions.jpg` - Experience section company photo

## 🚀 Running the Application

### Development Mode

#### Start the Backend Server
```bash
cd server
npm run dev
```
Server will run on `http://localhost:5000`

#### Start the Frontend Development Server
```bash
cd my_port
npm run dev
```
Frontend will run on `http://localhost:3000`

### Production Build

#### Build the Frontend
```bash
cd my_port
npm run build
```

#### Start the Backend in Production
```bash
cd server
npm start
```

## 📁 Project Structure

```
my_port/
├── public/
│   ├── images/          # Portfolio images
│   └── vite.svg
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── BackToTop.jsx
│   │   └── LoadingSpinner.jsx
│   ├── App.jsx          # Main App component
│   ├── App.css          # Global styles
│   ├── index.css        # Base styles
│   └── main.jsx         # Entry point
├── package.json
└── vite.config.js

server/
├── server.js            # Main server file
├── package.json
└── env.example         # Environment variables example
```

## 🔧 API Endpoints

### Portfolio Data
- `GET /api/portfolio` - Get portfolio information
- `GET /api/health` - Health check endpoint

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/admin/messages` - Get contact messages (admin)
- `PATCH /api/admin/messages/:id/read` - Mark message as read

## 🎨 Customization

### Colors and Themes
Modify CSS variables in `App.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* ... other variables */
}
```

### Content Updates
- **Personal Information**: Update `server.js` portfolio data
- **Projects**: Modify projects array in backend
- **Skills**: Update skills object in backend
- **Experience**: Modify experience array in backend

### Styling
- Each component has its own CSS file
- Global styles are in `App.css`
- Responsive breakpoints: 768px, 992px, 1200px

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in deployment platform

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Deploy the `server` directory
3. Ensure MongoDB connection is configured

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
EMAIL_USER=your-production-email
EMAIL_PASS=your-production-email-password
FRONTEND_URL=https://your-frontend-domain.com
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Prevent spam and abuse
- **Input Validation**: Sanitize and validate user input
- **Environment Variables**: Secure configuration

## 📧 Contact Form Features

- **Client-side Validation**: Real-time form validation
- **Server-side Validation**: Express Validator for security
- **Email Notifications**: Automatic email to portfolio owner
- **Auto-reply**: Confirmation email to user
- **Database Storage**: Messages stored in MongoDB
- **Admin Panel**: View and manage contact messages

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Responsive images with proper sizing
- **Lazy Loading**: Components load as needed
- **Caching**: Browser caching for static assets
- **Minification**: Production builds are minified

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Chala Birmechu**
- Email: chalabirmechu@gmail.com
- LinkedIn: [Chala Birmechu](https://et.linkedin.com/in/ch%C3%A0l%C3%A0-birmechu-442057360)
- GitHub: [ChalaBirmechu](https://github.com/ChalaBirmechu)
- Twitter: [@ChalaBirmechu](https://twitter.com/ChalaBirmechu)

---

⭐ If you found this portfolio helpful, please give it a star!
