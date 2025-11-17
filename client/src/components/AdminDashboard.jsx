import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all'); // all, read, unread
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchMessages();
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL || 'https://server-b6w3.onrender.com'}/api/admin/messages`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessages(response.data);
      setError('');
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
      } else {
        setError('Failed to fetch messages. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.patch(
        `${import.meta.env.VITE_API_URL || 'https://chalabirmechngs.vercel.app'}/api/admin/messages/${id}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessages(messages.map(msg => 
        msg._id === id ? { ...msg, isRead: true } : msg
      ));
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'read') return msg.isRead;
    if (filter === 'unread') return !msg.isRead;
    return true;
  });

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  if (loading) {
    return (
      <div className="admin-dashboard-container">
        <div className="admin-loading">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage contact messages</p>
        </div>
        <button onClick={handleLogout} className="admin-logout-button">
          Logout
        </button>
      </div>

      {error && <div className="admin-error-banner">{error}</div>}

      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-number">{messages.length}</div>
          <div className="admin-stat-label">Total Messages</div>
        </div>
        <div className="admin-stat-card unread">
          <div className="admin-stat-number">{unreadCount}</div>
          <div className="admin-stat-label">Unread</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-number">{messages.length - unreadCount}</div>
          <div className="admin-stat-label">Read</div>
        </div>
      </div>

      <div className="admin-filters">
        <button
          className={`admin-filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`admin-filter-btn ${filter === 'unread' ? 'active' : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread ({unreadCount})
        </button>
        <button
          className={`admin-filter-btn ${filter === 'read' ? 'active' : ''}`}
          onClick={() => setFilter('read')}
        >
          Read
        </button>
      </div>

      <div className="admin-messages-list">
        {filteredMessages.length === 0 ? (
          <div className="admin-empty-state">
            <p>No messages found</p>
          </div>
        ) : (
          filteredMessages.map((message) => (
            <div
              key={message._id}
              className={`admin-message-card ${!message.isRead ? 'unread' : ''}`}
            >
              <div className="admin-message-header">
                <div className="admin-message-info">
                  <h3>{message.name || 'Anonymous'}</h3>
                  <span className="admin-message-email">{message.email}</span>
                </div>
                <div className="admin-message-meta">
                  <span className="admin-message-date">
                    {new Date(message.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  {!message.isRead && (
                    <span className="admin-unread-badge">New</span>
                  )}
                </div>
              </div>
              {message.subject && (
                <div className="admin-message-subject">
                  <strong>Subject:</strong> {message.subject}
                </div>
              )}
              <div className="admin-message-body">{message.message}</div>
              {!message.isRead && (
                <button
                  onClick={() => markAsRead(message._id)}
                  className="admin-mark-read-button"
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

