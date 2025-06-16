import React, { useState } from 'react';
import BookAppointment from '../components/BookAppointment';
function BookAppointmentPage() {
  const [token] = useState('');
  return <BookAppointment token={token} />;
}
export default BookAppointmentPage;