import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { 
  CheckCircleIcon, 
  ClockIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { openModal, doctors } = useBooking();

  const services = {
    'general-consultation': {
      name: 'General Consultation',
      description: 'Our General Consultation service provides comprehensive primary healthcare for patients of all ages. Our experienced general practitioners conduct thorough health assessments, diagnose conditions, and develop personalized treatment plans.',
      fullDescription: 'At WellBridge Health, our General Consultation service is the foundation of quality healthcare. Our skilled general practitioners provide comprehensive medical care, from routine check-ups to managing chronic conditions. We believe in building long-term relationships with our patients, understanding their unique health needs, and providing continuous, coordinated care.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
      doctors: ['mike', 'sue'],
      duration: '30-45 minutes',
      price: 'KSH 2,500',
      whatToExpect: [
        'Reception and registration process',
        'Vital signs measurement by our nursing staff',
        'Detailed consultation with your chosen doctor',
        'Physical examination as needed',
        'Discussion of symptoms and medical history',
        'Diagnosis and treatment plan development',
        'Prescription of medications if required',
        'Follow-up appointment scheduling if needed'
      ],
      faqs: [
        {
          question: 'How long does a general consultation take?',
          answer: 'Typically 30-45 minutes, allowing enough time for a thorough assessment and discussion of your health concerns.'
        },
        {
          question: 'What should I bring to my appointment?',
          answer: 'Please bring a valid ID, insurance card (if applicable), list of current medications, and any relevant medical records.'
        },
        {
          question: 'Can I request a specific doctor?',
          answer: 'Yes, you can choose your preferred doctor when booking your appointment through our online system.'
        },
        {
          question: 'Do you accept insurance?',
          answer: 'We accept most major insurance plans. Please contact us to verify coverage for your specific plan.'
        }
      ]
    },
    'emergency-care': {
      name: 'Emergency Care',
      description: '24/7 emergency medical services for urgent health conditions, trauma care, and life-threatening situations with immediate response.',
      fullDescription: 'Our Emergency Care department operates around the clock to provide immediate medical attention for urgent and life-threatening conditions. Our emergency medicine specialists and trauma-trained nurses are equipped to handle everything from minor injuries to major medical emergencies.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      doctors: ['mark', 'mike'],
      duration: 'Variable',
      price: 'KSH 5,000+',
      whatToExpect: [
        'Immediate triage assessment',
        'Priority-based treatment scheduling',
        'Rapid diagnostic testing if required',
        'Emergency stabilization procedures',
        'Pain management and symptom relief',
        'Coordination with specialist teams',
        'Family communication and updates',
        'Transfer to appropriate care level'
      ],
      faqs: [
        {
          question: 'When should I visit the emergency department?',
          answer: 'Visit for severe chest pain, difficulty breathing, major injuries, severe bleeding, loss of consciousness, or any life-threatening condition.'
        },
        {
          question: 'How long will I wait in the emergency room?',
          answer: 'Wait times vary based on the severity of your condition. Critical cases are seen immediately, while less urgent cases may wait longer.'
        },
        {
          question: 'What if I need surgery or specialist care?',
          answer: 'We have partnerships with specialist surgeons and can arrange immediate transfers to appropriate facilities when needed.'
        }
      ]
    },
    'pediatrics': {
      name: 'Pediatrics',
      description: 'Specialized healthcare services for infants, children, and adolescents with child-friendly environment and experienced pediatricians.',
      fullDescription: 'Our Pediatrics department provides comprehensive healthcare for children from birth through adolescence. Our pediatricians specialize in the physical, emotional, and social health of children, ensuring they receive age-appropriate care in a comfortable, child-friendly environment.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      doctors: ['sue', 'emy'],
      duration: '30-40 minutes',
      price: 'KSH 3,000',
      whatToExpect: [
        'Child-friendly reception area',
        'Age-appropriate vital signs measurement',
        'Gentle examination by pediatric specialist',
        'Development and growth assessment',
        'Vaccination administration if scheduled',
        'Parent/guardian consultation and education',
        'Nutritional and behavioral guidance',
        'Follow-up care planning'
      ],
      faqs: [
        {
          question: 'At what age should my child first visit a pediatrician?',
          answer: 'We recommend the first visit within the first week of life, followed by regular check-ups according to the recommended schedule.'
        },
        {
          question: 'What vaccinations do you provide?',
          answer: 'We provide all routine childhood vaccinations according to the Kenya Ministry of Health immunization schedule.'
        },
        {
          question: 'Can parents stay with their child during the examination?',
          answer: 'Yes, we encourage parents to be present during examinations to help comfort their child and discuss care plans.'
        }
      ]
    },
    'mental-health': {
      name: 'Mental Health',
      description: 'Professional counseling, therapy, and mental wellness support with qualified mental health professionals in a safe environment.',
      fullDescription: 'Our Mental Health services provide comprehensive psychological support and counseling for individuals dealing with various mental health challenges. Our qualified mental health professionals offer therapy, counseling, and support in a confidential, safe environment.',
      image: 'https://images.pexels.com/photos/5214707/pexels-photo-5214707.jpeg?auto=compress&cs=tinysrgb&w=800',
      doctors: ['emy', 'sharon'],
      duration: '50-60 minutes',
      price: 'KSH 4,000',
      whatToExpect: [
        'Confidential intake assessment',
        'Safe, private consultation room',
        'Initial mental health screening',
        'Discussion of concerns and goals',
        'Development of treatment plan',
        'Therapeutic intervention session',
        'Homework or self-care assignments',
        'Scheduling of follow-up sessions'
      ],
      faqs: [
        {
          question: 'Is my information kept confidential?',
          answer: 'Yes, all mental health consultations are strictly confidential and protected under patient privacy laws.'
        },
        {
          question: 'How many sessions will I need?',
          answer: 'The number of sessions varies based on individual needs and treatment goals. This will be discussed during your initial consultation.'
        },
        {
          question: 'Do you provide crisis intervention?',
          answer: 'Yes, we offer crisis intervention services for urgent mental health situations. Please call our emergency line if you need immediate help.'
        }
      ]
    },
    'diagnostics': {
      name: 'Diagnostics',
      description: 'Advanced diagnostic testing and comprehensive laboratory services for accurate diagnosis and health monitoring.',
      fullDescription: 'Our Diagnostics department offers comprehensive laboratory services and diagnostic testing to help healthcare providers make accurate diagnoses. We use state-of-the-art equipment and maintain the highest standards of accuracy and reliability.',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
      doctors: ['sharon', 'mike'],
      duration: '15-30 minutes',
      price: 'KSH 1,500+',
      whatToExpect: [
        'Quick registration process',
        'Sample collection by trained technicians',
        'Comfortable waiting area',
        'Professional sample handling',
        'Quality-controlled testing procedures',
        'Accurate result generation',
        'Result delivery within specified timeframe',
        'Follow-up consultation if needed'
      ],
      faqs: [
        {
          question: 'How long do test results take?',
          answer: 'Most routine tests are available within 24-48 hours. Specialized tests may take longer, and we will inform you of expected turnaround times.'
        },
        {
          question: 'Do I need to fast before blood tests?',
          answer: 'Some tests require fasting. We will provide specific instructions when you book your appointment.'
        },
        {
          question: 'How will I receive my results?',
          answer: 'Results can be collected in person, sent via secure email, or delivered through our patient portal system.'
        }
      ]
    },
    'medical-imaging': {
      name: 'Medical Imaging',
      description: 'State-of-the-art imaging services including X-rays, ultrasounds, CT scans, and MRI for comprehensive diagnostic imaging.',
      fullDescription: 'Our Medical Imaging department provides advanced diagnostic imaging services using the latest technology. Our qualified radiologists and technicians ensure high-quality images for accurate diagnosis while maintaining patient comfort and safety.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      doctors: ['mark', 'sharon'],
      duration: '20-60 minutes',
      price: 'KSH 3,500+',
      whatToExpect: [
        'Pre-imaging consultation and preparation',
        'Comfortable changing facilities',
        'Professional imaging procedure',
        'Safety measures and radiation protection',
        'Patient positioning and comfort',
        'Real-time image quality assessment',
        'Post-procedure instructions if needed',
        'Image interpretation by radiologist'
      ],
      faqs: [
        {
          question: 'Are imaging procedures safe?',
          answer: 'Yes, all our imaging procedures follow strict safety protocols. We use the lowest possible radiation doses for X-rays and CT scans.'
        },
        {
          question: 'Can I eat before my imaging appointment?',
          answer: 'This depends on the type of imaging. We will provide specific preparation instructions when you schedule your appointment.'
        },
        {
          question: 'When will my images be ready?',
          answer: 'Images are typically available within 24-48 hours. Emergency cases are processed immediately.'
        }
      ]
    }
  };

  if (!serviceId || !services[serviceId as keyof typeof services]) {
    return <Navigate to="/services" replace />;
  }

  const service = services[serviceId as keyof typeof services];
  const serviceDoctors = doctors.filter(doc => service.doctors.includes(doc.id));

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video bg-gray-200">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {service.name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
              >
                Book Appointment
              </button>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {service.duration}
                </div>
                <div className="font-semibold text-purple-600">
                  {service.price}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About This Service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Available Doctors */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Specialists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDoctors.map(doctor => (
              <div key={doctor.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <a
                    href={`https://wa.me/${doctor.phone.replace(/\+/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors mt-2"
                  >
                    <PhoneIcon className="h-4 w-4 mr-1" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatToExpected.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;