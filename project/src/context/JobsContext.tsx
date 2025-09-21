import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Job {
  id: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  posted: string;
  status: 'active' | 'closed';
}

export interface JobApplication {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
}

interface JobsContextType {
  jobs: Job[];
  applications: JobApplication[];
  submitApplication: (application: Omit<JobApplication, 'id' | 'status' | 'appliedAt'>) => Promise<string>;
  getApplicationById: (id: string) => JobApplication | undefined;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobsProvider');
  }
  return context;
};

export const JobsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<JobApplication[]>([]);

  const jobs: Job[] = [
    {
      id: 'general-practitioner',
      title: 'General Practitioner',
      department: 'Medical',
      description: 'We are seeking a dedicated General Practitioner to provide comprehensive primary care services to our patients. The ideal candidate will have excellent diagnostic skills and a patient-centered approach.',
      requirements: [
        'MD or equivalent medical degree',
        'Valid medical license in Kenya',
        '2+ years of clinical experience',
        'Strong communication skills',
        'Fluent in English and Swahili'
      ],
      location: 'Nairobi',
      type: 'full-time',
      posted: '2025-01-10',
      status: 'active'
    },
    {
      id: 'registered-nurse',
      title: 'Registered Nurse',
      department: 'Nursing',
      description: 'Join our compassionate nursing team to provide high-quality patient care in our general ward. Experience in emergency care is a plus.',
      requirements: [
        'Bachelor of Science in Nursing',
        'Valid nursing license',
        '1+ years of hospital experience',
        'BLS certification required',
        'ACLS certification preferred'
      ],
      location: 'Nairobi',
      type: 'full-time',
      posted: '2025-01-08',
      status: 'active'
    },
    {
      id: 'lab-technician',
      title: 'Laboratory Technician',
      department: 'Diagnostics',
      description: 'We need a skilled Laboratory Technician to conduct various diagnostic tests and maintain laboratory equipment.',
      requirements: [
        'Diploma in Medical Laboratory Technology',
        'Valid laboratory license',
        'Experience with automated analyzers',
        'Attention to detail',
        'Computer skills'
      ],
      location: 'Nairobi',
      type: 'full-time',
      posted: '2025-01-05',
      status: 'active'
    },
    {
      id: 'physiotherapist',
      title: 'Physiotherapist',
      department: 'Rehabilitation',
      description: 'Seeking a qualified Physiotherapist to help patients recover and improve their physical function through therapeutic interventions.',
      requirements: [
        'Bachelor in Physiotherapy',
        'Valid physiotherapy license',
        '2+ years of clinical experience',
        'Knowledge of modern rehabilitation techniques',
        'Good interpersonal skills'
      ],
      location: 'Nairobi',
      type: 'full-time',
      posted: '2025-01-03',
      status: 'active'
    },
    {
      id: 'receptionist',
      title: 'Medical Receptionist',
      department: 'Administration',
      description: 'We are looking for a friendly and organized Medical Receptionist to be the first point of contact for our patients.',
      requirements: [
        'Diploma in any field',
        'Experience in customer service',
        'Proficiency in MS Office',
        'Excellent communication skills',
        'Ability to multitask'
      ],
      location: 'Nairobi',
      type: 'full-time',
      posted: '2024-12-28',
      status: 'active'
    }
  ];

  const submitApplication = async (applicationData: Omit<JobApplication, 'id' | 'status' | 'appliedAt'>): Promise<string> => {
    const newApplication: JobApplication = {
      ...applicationData,
      id: Date.now().toString(),
      status: 'pending',
      appliedAt: new Date().toISOString()
    };

    setApplications(prev => [...prev, newApplication]);

    // Send notification to HR (simulated)
    const job = jobs.find(j => j.id === applicationData.jobId);
    console.log('New job application submitted:', {
      applicant: applicationData.name,
      position: job?.title,
      id: newApplication.id
    });

    return newApplication.id;
  };

  const getApplicationById = (id: string): JobApplication | undefined => {
    return applications.find(app => app.id === id);
  };

  const value: JobsContextType = {
    jobs,
    applications,
    submitApplication,
    getApplicationById
  };

  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  );
};