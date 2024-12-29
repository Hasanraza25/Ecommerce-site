"use client"
import { useState, useEffect } from 'react';

const AboutTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [membersToShow, setMembersToShow] = useState(3);

  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'CEO', image: '/images/team/member-1.svg' },
    { id: 2, name: 'Jane Smith', position: 'CTO', image: '/images/team/member-2.svg' },
    { id: 3, name: 'Michael Lee', position: 'Developer', image: '/images/team/member-3.svg' },
    { id: 4, name: 'Emily Davis', position: 'Designer', image: '/images/team/member-1.svg' },
    { id: 5, name: 'Sarah Miller', position: 'Manager', image: '/images/team/member-2.svg' },
  ];

  useEffect(() => {
    const updateMembersToShow = () => {
      if (window.innerWidth < 640) {
        setMembersToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setMembersToShow(2); // Tablet
      } else {
        setMembersToShow(3); // Desktop
      }
    };

    updateMembersToShow();
    window.addEventListener('resize', updateMembersToShow);

    return () => {
      window.removeEventListener('resize', updateMembersToShow);
    };
  }, []);

  const totalSlides = Math.ceil(teamMembers.length / membersToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const visibleMembers = teamMembers.slice(
    currentIndex * membersToShow,
    currentIndex * membersToShow + membersToShow
  );

  return (
    <div className="team-section my-40">
      <h2 className="text-5xl font-bold text-center mb-8">Meet Our Team</h2>

      <div className="relative">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleMembers.map((member) => (
            <div
              key={member.id}
              className={`p-4 flex justify-center items-center text-center ${
                membersToShow === 1 ? 'w-full' : 'w-1/2 sm:w-1/3'
              }`}
            >
              <div className="bg-white p-4 flex flex-col justify-center items-center rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-auto md:h-72 object-cover mb-4 rounded-lg bg-[#f5f5f5] px-8"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 mx-1 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
