import React, { useState } from 'react';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'office', name: 'Office Tools' },
    { id: 'sap', name: 'SAP' }
  ];

  const courses = [
    { id: 1, title: 'Full Stack Python', category: 'programming', duration: '4 months', description: 'Complete Python web development with Django and React', features: ['Live Projects', 'Placement Support', 'Industry Certification'] },
    { id: 2, title: 'Java Development', category: 'programming', duration: '3 months', description: 'Core Java, Advanced Java, and Spring Framework', features: ['Real-world Projects', 'Expert Training', 'Job Assistance'] },
    { id: 3, title: 'Data Science', category: 'programming', duration: '6 months', description: 'Python, Machine Learning, and Data Analytics', features: ['Industry Projects', 'IBM Certification', 'Career Guidance'] },
    { id: 4, title: 'Digital Marketing', category: 'design', duration: '2 months', description: 'SEO, Social Media Marketing, and Content Strategy', features: ['Google Certification', 'Live Campaigns', 'Portfolio Building'] },
    { id: 5, title: 'MS Office Advanced', category: 'office', duration: '1 month', description: 'Advanced Excel, PowerPoint, and Access', features: ['Microsoft Certification', 'Practical Training', 'Job Support'] },
    { id: 6, title: 'SAP FICO', category: 'sap', duration: '3 months', description: 'Financial Accounting and Controlling in SAP', features: ['SAP Certification', 'Live Projects', 'Placement Assistance'] }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="p-6 max-w-7xl mx-auto pt-[100px]">
      <h1 className="text-3xl font-bold text-center mb-6">Our Courses</h1>
      <p className="text-center text-gray-600 mb-8">Choose from our wide range of professional courses</p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full font-medium transition duration-300 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 text-sm mb-3">Duration: {course.duration}</p>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mb-4">
              {course.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
