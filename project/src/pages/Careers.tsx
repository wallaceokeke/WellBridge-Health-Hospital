import React, { useState } from 'react';
import { useJobs } from '../context/JobsContext';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  ClockIcon, 
  CalendarIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Careers = () => {
  const { jobs, submitApplication } = useJobs();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setIsSubmitting(true);
    try {
      const id = await submitApplication({
        jobId: selectedJob,
        ...applicationData
      });
      
      setApplicationId(id);
      toast.success('Application submitted successfully! You will be notified about the status.');
      
      // Reset form
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
      });
      setSelectedJob(null);
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 text-green-800';
      case 'part-time': return 'bg-blue-100 text-blue-800';
      case 'contract': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Healthcare Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a compassionate healthcare team dedicated to making a difference 
            in patients' lives. Discover meaningful career opportunities at WellBridge Health.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose WellBridge Health?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Professional Growth',
                description: 'Continuous learning opportunities and career advancement',
                icon: '📈'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules and supportive work environment',
                icon: '⚖️'
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive healthcare and retirement benefits',
                icon: '💰'
              },
              {
                title: 'Making a Difference',
                description: 'Direct impact on patient care and community health',
                icon: '❤️'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Jobs List */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Open Positions ({jobs.filter(job => job.status === 'active').length})
            </h2>
            <div className="space-y-6">
              {jobs.filter(job => job.status === 'active').map((job) => (
                <div
                  key={job.id}
                  className={`bg-white p-6 rounded-2xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedJob === job.id 
                      ? 'border-purple-500 shadow-xl transform scale-[1.02]' 
                      : 'border-gray-100 hover:border-purple-300 hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 text-sm">
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {new Date(job.posted).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}>
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {selectedJob === job.id && (
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 id="application-form" className="text-2xl font-bold text-gray-900 mb-6">
                  Submit Your Application
                </h2>
                
                {!selectedJob ? (
                  <div className="text-center py-8">
                    <DocumentTextIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Select a position from the list to submit your application
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="text-sm text-purple-600 mb-4">
                        Applying for: <strong>{jobs.find(j => j.id === selectedJob)?.title}</strong>
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={applicationData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={applicationData.email}
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
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV Link *
                      </label>
                      <input
                        type="url"
                        name="resume"
                        value={applicationData.resume}
                        onChange={handleInputChange}
                        placeholder="https://drive.google.com/..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Please provide a link to your resume (Google Drive, Dropbox, etc.)
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter
                      </label>
                      <textarea
                        name="coverLetter"
                        value={applicationData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us why you're interested in this position..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                )}

                {applicationId && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="text-green-800 font-medium mb-2">Application Submitted!</h4>
                    <p className="text-green-700 text-sm">
                      Your application ID is: <strong>{applicationId}</strong>
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      You will be notified via WhatsApp/Email about your application status.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Employee Benefits */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Employee Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Health Insurance',
                description: 'Comprehensive medical, dental, and vision coverage for you and your family',
                icon: '🏥'
              },
              {
                title: 'Professional Development',
                description: 'Continuing education allowance and conference attendance support',
                icon: '📚'
              },
              {
                title: 'Retirement Plan',
                description: 'Competitive pension plan with employer matching contributions',
                icon: '💼'
              },
              {
                title: 'Paid Time Off',
                description: 'Generous vacation days, sick leave, and personal time off',
                icon: '🏖️'
              },
              {
                title: 'Flexible Schedule',
                description: 'Work-life balance with flexible scheduling options',
                icon: '⏰'
              },
              {
                title: 'Team Events',
                description: 'Regular team building activities and social events',
                icon: '🎉'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;