import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);

      if (res?.data?.token) {
        localStorage.setItem('token', res.data.token);
        setEmailSent(true); // Show success message
        setForm({ name: '', email: '', password: '' });
      }
    } catch (err) {
      console.error('Register error:', err);
      alert(err?.response?.data?.message || '❌ Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Student Registration</h2>
      
      {emailSent ? (
        <div className="success-message">
          <h3>✅ Registration Successful!</h3>
          <p>We've sent a confirmation email to {form.email}. Please check your inbox and verify your email address.</p>
          <p>Didn't receive the email? <button type="button" onClick={() => setEmailSent(false)}>Resend</button></p>
        </div>
      ) : (
        <>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password (min 8 characters)"
            value={form.password}
            onChange={handleChange}
            minLength="8"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </>
      )}
    </form>
  );
}