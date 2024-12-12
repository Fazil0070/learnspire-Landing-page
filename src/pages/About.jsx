import React from "react";
import aqeelImage from "../assets/aqeel.jpeg";
import akashImage from "../assets/akash.jpeg";
import fazilImage from "../assets/fazil.jpeg";
import Footer from "../components/Footer";

const TeamMember = ({ name, role, image }) => (
  <div className="group relative overflow-hidden bg-[#0B1120] rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-2">
    <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
    <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/10 rounded-full blur-[120px]" />
    <div className="relative z-10">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
      <p className="text-purple-400 text-center">{role}</p>
    </div>
  </div>
);

const About = () => {
  const teamMembers = [
    {
      name: "Aqeel Anaikar A",
      role: "CEO & Managing Director",
      image: aqeelImage,
    },
    {
      name: "Akash S",
      role: "Partner & Developer",
      image: akashImage,
    },
    {
      name: "Fazil Ahamed F",
      role: "Partner & Developer",
      image: fazilImage,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className=" font-Kanit container mx-auto max-w-6xl mt-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className=" text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            About Learnspire
          </h1>
          <p className="text-gray-400 mb-6">
            Learnspire is dedicated to revolutionizing education through
            innovative learning solutions.
          </p>
          <p className="text-gray-400">
            Our platform is designed to empower learners, educators, and
            institutions with cutting-edge tools to achieve their full
            potential in the modern world.
          </p>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div className="bg-[#0B1120] p-6 rounded-xl border border-gray-800 hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To bridge the gap between traditional education and emerging
              technologies by offering accessible, engaging, and impactful
              learning solutions.
            </p>
          </div>
          <div className="bg-[#0B1120] p-6 rounded-xl border border-gray-800 hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To create a world where education knows no bounds and learning
              becomes a lifelong journey of discovery and growth.
            </p>
          </div>
          <div className="bg-[#0B1120] p-6 rounded-xl border border-gray-800 hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-400">
              Innovation, integrity, inclusivity, and excellence guide every
              step we take in transforming education.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B1120] p-6 rounded-xl border border-gray-800 hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-4xl font-bold text-purple-500">10,000+</h3>
              <p className="text-gray-400">Students Empowered</p>
            </div>
            <div className="bg-[#0B1120] p-6 rounded-xl border border-gray-800 hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-4xl font-bold text-pink-500">500+</h3>
              <p className="text-gray-400">Courses Offered</p>
            </div>
            <div className="bg-[#0B1120] p-6 rounded-xl border border-gray-800 hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-4xl font-bold text-purple-500">50+</h3>
              <p className="text-gray-400">Institutional Partners</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};
export default About;
