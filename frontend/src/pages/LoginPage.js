import React, { useState } from 'react';
import Login from '../components/Login';
function LoginPage() {
  const [token, setToken] = useState('');
  return <Login setToken={setToken} />;
}
export default LoginPage;