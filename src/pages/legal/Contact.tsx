import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 sm:px-6 py-8">
        <Button variant="ghost" asChild className="mb-8 hover:bg-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Contact Us</h1>
          
          <p className="text-gray-600 mb-8">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[150px]"
                placeholder="How can we help you?"
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2 text-gray-600">
              <p>Email: <a href="mailto:dexterdejesus173@gmail.com" className="text-blue-600 hover:underline">dexterdejesus173@gmail.com</a></p>
              <p>Address: Metro Manila, Philippines, 1000</p>
              <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM PHT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 