import React, { useState } from 'react';
import DoctorDashboard from '../components/DoctorDashboard';
function DoctorDashboardPage() {
  const [doctorId] = useState('');
  const [token] = useState('');
  return <DoctorDashboard doctorId={doctorId} token={token} />;
}
export default DoctorDashboardPage;