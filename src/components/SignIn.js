import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/api';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const result = await signin(email, password); // signin function should be defined somewhere in your auth logic
      alert(result.message);  // Successful signup
      navigate('/');  // Redirect to dashboard on successful login
    } catch (error) {
      setError(error.response?.data?.message || 'Error logging in');  // Handle login error
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={email}  // Use the email state
            onChange={(e) => setEmail(e.target.value)}  // Update the email state
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}  // Use the password state
            onChange={(e) => setPassword(e.target.value)}  // Update the password state
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
          Sign In
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      <p className="text-sm mt-4 text-center">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
