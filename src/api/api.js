import axios from 'axios';

const backendURL = "https://server-placement.vercel.app" || 'http://localhost:5001'; // Fallback to local URL during development

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${backendURL}/api/register`, { email, password });
    return response.data;  // Success: return the data
  } catch (error) {
    if (error.response) {
      
      console.error('Signup error (backend):', error.response.data);
      throw new Error(error.response.data.message || 'Signup failed');
    } else if (error.request) {
    
      console.error('Signup error (no response):', error.request);
      throw new Error('No response from the server');
    } else {
      
      console.error('Signup error:', error.message);
      throw new Error('An error occurred during signup');
    }
  }
};

export const signin = async (email, password) => {
  
  try {
    const response = await axios.post(`${backendURL}/api/login`, { email, password });
    alert(response.data.message);  // Assuming message exists in response
    return response.data;  // Return response data if needed
  } catch (error) {
    if (error.response) {
      //
      console.error('Signin error (backend):', error.response.data);
      throw new Error(error.response.data.message || 'Signin failed');
    } else if (error.request) {
      // No response was received from the backend
      console.error('Signin error (no response):', error.request);
      throw new Error('No response from the server');
    } else {
      // Other unknown errors
      console.error('Signin error:', error.message);
      throw new Error('An error occurred during signin');
    }
  }

};