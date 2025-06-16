import React, { useState } from 'react';
import MyAppointment from '../components/MyAppointment';
function MyAppointmentPage() {
  const [token] = useState('');
  return <MyAppointment token={token} />;
}
export default MyAppointmentPage;