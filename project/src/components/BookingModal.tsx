import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../context/BookingContext';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const BookingModal = () => {
  const { isModalOpen, closeModal, doctors, createBooking, getDoctorAvailability } = useBooking();
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    doctorId: '',
    service: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'General Consultation',
    'Emergency Care',
    'Pediatrics',
    'Mental Health',
    'Diagnostics',
    'Medical Imaging',
    'Surgery Support',
    'Wellness Check',
    'Physiotherapy',
    'Nutrition Counseling'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.patientName || !formData.patientPhone || !formData.doctorId || 
          !formData.service || !formData.date || !formData.time) {
        toast.error('Please fill in all required fields');
        return;
      }

      // Check availability
      if (!getDoctorAvailability(formData.doctorId, formData.date)) {
        toast.error('This doctor is fully booked for the selected date. Please choose another doctor or date.');
        return;
      }

      const success = await createBooking(formData);

      if (success) {
        toast.success('Appointment booked successfully! You will receive a confirmation shortly.');
        
        // Generate PDF confirmation (simulated)
        const doctor = doctors.find(d => d.id === formData.doctorId);
        const confirmationData = {
          patientName: formData.patientName,
          doctorName: doctor?.name,
          service: formData.service,
          date: format(new Date(formData.date), 'MMMM dd, yyyy'),
          time: formData.time,
          phone: doctor?.phone
        };

        // In a real app, this would generate an actual PDF
        console.log('PDF Confirmation:', confirmationData);
        
        // Reset form
        setFormData({
          patientName: '',
          patientPhone: '',
          patientEmail: '',
          doctorId: '',
          service: '',
          date: '',
          time: ''
        });
        
        closeModal();
      } else {
        toast.error('Booking failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Book Consultation</h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="patientPhone"
                value={formData.patientPhone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="patientEmail"
                value={formData.patientEmail}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Doctor *
              </label>
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Required *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={format(new Date(), 'yyyy-MM-dd')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time *
              </label>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                    className={`p-2 text-sm rounded-lg border transition-colors ${
                      formData.time === time
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'border-gray-300 hover:border-purple-500'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-700">
              <strong>Note:</strong> After booking, you will receive a WhatsApp confirmation 
              from your selected doctor and a downloadable appointment slip. Each doctor 
              accepts a maximum of 5 appointments per day.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;