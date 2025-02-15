"use client";

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

interface ContactProps {
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      if (formRef.current) {
          await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setSuccess(true);
        formRef.current.reset();
        setTimeout(onClose, 2000);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#0d0d0d] p-8 rounded-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
        <h2 className="text-2xl font-bold mb-6 text-neon-blue">Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#2E2E2E] focus:border-neon-blue focus:outline-none"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#2E2E2E] focus:border-neon-blue focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#2E2E2E] focus:border-neon-blue focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-lg bg-black text-neon-blue border border-[#2E2E2E] hover:bg-[#2E2E2E] transition-colors duration-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
          {error && <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
