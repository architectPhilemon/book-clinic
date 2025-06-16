import React, { useEffect, useState } from 'react';
import { getServices } from '../services/serviceService';

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const data = await getServices();
      setServices(data);
    }
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <strong>{service.name}</strong>: {service.description} {service.price && `- $${service.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
