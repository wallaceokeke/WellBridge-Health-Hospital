import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Doctor {
  id: string;
  name: string;
  phone: string;
  specialty: string;
  image: string;
  dailyLimit: number;
  currentBookings: number;
}

export interface Booking {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorId: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

interface BookingContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  doctors: Doctor[];
  bookings: Booking[];
  createBooking: (bookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>) => Promise<boolean>;
  getDoctorAvailability: (doctorId: string, date: string) => boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const doctors: Doctor[] = [
    {
      id: 'mike',
      name: 'Dr. Mike Johnson',
      phone: '07557362321',
      specialty: 'General Medicine',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      dailyLimit: 5,
      currentBookings: 0
    },
    {
      id: 'sue',
      name: 'Dr. Sue Williams',
      phone: '0706142076',
      specialty: 'Pediatrics',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=300',
      dailyLimit: 5,
      currentBookings: 0
    },
    {
      id: 'mark',
      name: 'Dr. Mark Davis',
      phone: '0797486064',
      specialty: 'Emergency Medicine',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300',
      dailyLimit: 5,
      currentBookings: 0
    },
    {
      id: 'emy',
      name: 'Dr. Emily Brown',
      phone: '+254712345678',
      specialty: 'Mental Health',
      image: 'https://images.pexels.com/photos/5214707/pexels-photo-5214707.jpeg?auto=compress&cs=tinysrgb&w=300',
      dailyLimit: 5,
      currentBookings: 0
    },
    {
      id: 'sharon',
      name: 'Dr. Sharon Miller',
      phone: '+254723456789',
      specialty: 'Diagnostics',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=300',
      dailyLimit: 5,
      currentBookings: 0
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getDoctorAvailability = (doctorId: string, date: string): boolean => {
    const doctor = doctors.find(d => d.id === doctorId);
    if (!doctor) return false;

    const dayBookings = bookings.filter(
      booking => booking.doctorId === doctorId && booking.date === date && booking.status !== 'cancelled'
    );

    return dayBookings.length < doctor.dailyLimit;
  };

  const createBooking = async (bookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<boolean> => {
    // Check availability
    if (!getDoctorAvailability(bookingData.doctorId, bookingData.date)) {
      return false;
    }

    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [...prev, newBooking]);

    // Send WhatsApp notification (simulated)
    const doctor = doctors.find(d => d.id === bookingData.doctorId);
    if (doctor) {
      const message = `New Appointment Booking:\n\nPatient: ${bookingData.patientName}\nPhone: ${bookingData.patientPhone}\nService: ${bookingData.service}\nDate: ${bookingData.date}\nTime: ${bookingData.time}`;
      const whatsappUrl = `https://wa.me/${doctor.phone.replace(/\+/, '')}?text=${encodeURIComponent(message)}`;
      // In a real app, this would be handled server-side
      console.log('WhatsApp notification:', whatsappUrl);
    }

    return true;
  };

  const value: BookingContextType = {
    isModalOpen,
    openModal,
    closeModal,
    doctors,
    bookings,
    createBooking,
    getDoctorAvailability
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};