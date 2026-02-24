import React, { useState } from "react";
import axios from "axios";

const BookingForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.service) {
      alert("Please select a service");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/bookings/", form);
      alert("Booking submitted successfully");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to submit booking");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-lg border border-slate-300 bg-white " +
    "text-slate-900 placeholder:text-slate-400 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        Book a Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputStyle}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className={inputStyle}
            required
          />
        </div>

        {/* Required Service */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Required Service
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">Select a service</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Painting">Painting</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Renovation">Renovation</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Project Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your requirement"
            rows={4}
            className={inputStyle}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        >
          Book My Fixer
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

