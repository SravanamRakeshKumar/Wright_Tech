import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import 'tailwindcss/tailwind.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mapCenter = {
    lat: 16.503996,
    lng: 80.641299
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen p-6 pt-[70px]">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with us for any queries</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Head Office</h3>
            <p>24-2-10, N.R.P.Road</p>
            <p>Gandhi Nagar, VIJAYAWADA-3</p>
            <p className="font-bold">Phone: 9849062060</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Branch Office</h3>
            <p>Regence Apartment 4th Floor</p>
            <p>Opp. Malabar Gold, Labbipet</p>
            <p>VIJAYAWADA-10</p>
            <p className="font-bold">Phone: 6309894500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p>rightcomputers786@gmail.com</p>
            <p>wrighttech2018@gmail.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <div className="w-full max-w-5xl mx-auto h-96 mt-6 overflow-hidden rounded-lg shadow-lg">
          <LoadScript googleMapsApiKey="AIzaSyCl-iVCYhDFKjeXqHkKJ6mG_Qf1uDUVMXY">
            <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={mapCenter} zoom={15}>
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
    </div>
  );
}

export default Contact;
