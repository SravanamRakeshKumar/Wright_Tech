import React from 'react';
function About() {
    const teamMembers = [
      {
        id: 1,
        name: 'Syed Basha',
        role: 'Director',
        qualification: 'M.B.A., M.Com.',
        image: './director.jpg'
      },
      {
        id: 2,
        name: 'Sujatha',
        role: 'Senior Trainer',
        qualification: 'M.Tech',
        image: 'data:image/jpeg;base64,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'
      },
      {
        id: 3,
        name: 'Sarah Johnson',
        role: 'Python Expert',
        qualification: 'M.Sc',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNnbnoAixVY1Ro1JGGzKhp4mjr6Oj5pal3Q&s'
      }
    ];
  
    const successStories = [
      {
        id: 1,
        name: 'Rahul Kumar',
        company: 'Microsoft',
        story: 'Completed Python Full Stack and got placed in Microsoft with 12 LPA package.'
      },
      {
        id: 2,
        name: 'Priya Sharma',
        company: 'Amazon',
        story: 'After Java training, secured a position at Amazon as Software Developer.'
      },
      {
        id: 3,
        name: 'Arun Reddy',
        company: 'Google',
        story: 'Full Stack Development course helped me land a job at Google.'
      }
    ];
  
    return (
      <div className="px-6 py-10 space-y-12 pt-[100px]">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <div className="flex flex-col items-center mt-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <div className="text-6xl font-bold">25</div>
            <div className="mt-2">
              <h2 className="text-2xl font-semibold">Years of Excellence in Training</h2>
              <p className="text-lg">Empowering careers since 1999</p>
            </div>
          </div>
        </section>
  
        {/* <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {['Industry Experts', 'Placement Support', 'Practical Learning', 'Modern Infrastructure'].map((title, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ))}
          </div>
        </section> */}
        {/* section */}
        <section>
  <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Strengths</h2>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-20">
    {[
      {
        title: 'Industry Experts',
        content: 'Our team consists of industry-leading professionals with years of experience.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2AHbMIHWN_5GLcrsjSBm5_us2Melsu5dvQ&s',
      },
      {
        title: 'Placement Support',
        content: 'We provide full placement support to ensure that our students land their dream jobs.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPulNBJe2ecj87jwRV7cn7ZqkTztd3RwqQA&s',
      },
      {
        title: 'Practical Learning',
        content: 'Hands-on training is at the core of our teaching methodology.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkNWY9JYvldpmZAdbY2BletxUEbVmq8POng&s',
      },
      {
        title: 'Modern Infrastructure',
        content: 'Our state-of-the-art facilities include the latest technologies and tools.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0dDBMYQFblQ7ejc6PNodErv7XY9-8M04hA&s',
      },
    ].map((item, index) => (
      <div
        key={index}
        className="font-[20px] h-[200px] p-6 bg-white shadow-lg rounded-lg text-center hover:scale-105 transition-transform relative"
      >
        <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>

        {/* Content */}
        <div className="content opacity-1 transition-opacity duration-300">
          <p className="text-gray-600 mt-2">{item.content}</p>
        </div>

        {/* Image */}
        <div className="image absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100  transition-opacity  duration-300">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    ))}
  </div>
</section>


  
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {successStories.map(story => (
              <div key={story.id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
                <h4 className="text-lg text-blue-600">{story.company}</h4>
                <p className="text-gray-600 mt-2">{story.story}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Training Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjC9BNu28mg7AAAnRXEoQ6MtOa0MoyVvGZnw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FfayhCEr5QPd38WzwBlESYpoFR1sfa4r2g&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t5_yeIysn13MI_-4AP4QTGfN5_aDm_i9oA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YLC7vOrF6n7o0C1tbrA47kS9bj6alMOezw&s'].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
                <img src={`${img}`} alt="Training Session" className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
  {teamMembers.map((member) => (
    <div
      key={member.id}
      className="relative border border-white hover:border-b-[10px] border-b-blue-800 h-[300px]  bg-white shadow-lg text-center overflow-hidden 
                 hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
    >
      <img
        src={member.image}
        alt={member.name}
        className="absolute w-[80%] h-[80%] border rounded-3xl object-cover transition-all duration-500 
                   hover:relative hover:w-48 hover:h-48 hover:rounded-full "
      />
      {/* <div className="opacity-0 hover:opacity-100 transition-opacity duration-500 mt-16"> */}
        <h3 className="text-xl font-semibold text-gray-800 mt-[10px]">{member.name}</h3>
        <p className="text-blue-600 font-medium">{member.role}</p>
        <p className="text-gray-600">{member.qualification}</p>
      {/* </div> */}
    </div>
  ))}
</div>


          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {teamMembers.map(member => (
              <div key={member.id} className="relative border border-blue-500 h-[300px]  bg-white shadow-lg  text-center  hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="absolute h-[300px] w-full  hover:relative w-30 h-[60%] mx-auto  border-2 border-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600">{member.qualification}</p>
              </div>
            ))}
          </div> */}
        </section>
      </div>
    );
  }
  export default About;
  