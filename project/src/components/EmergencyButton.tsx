import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

const EmergencyButton = () => {
  const handleEmergencyCall = () => {
    window.open('tel:+254700123456', '_self');
  };

  return (
    <button
      onClick={handleEmergencyCall}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 animate-pulse"
      title="Emergency Call"
    >
      <PhoneIcon className="h-6 w-6" />
      <span className="sr-only">Emergency Call</span>
    </button>
  );
};

export default EmergencyButton;