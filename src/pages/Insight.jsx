import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dashboard from '../assets/dashboard.png';
import analysis from '../assets/analysis.png';
import codingChallenges from '../assets/Coding.png';
import studentResults from '../assets/results.png';

const InsightCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 pl-8">{description}</p>
    </div>
  );
};

InsightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const CodingChallengesImage = () => (
  <div className="bg-[#0B1120] rounded-xl p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-lg font-semibold">Coding Challenges Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <img
        src={codingChallenges || ''}
        alt="Coding Challenges Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
);

const StudentResultsImage = () => (
  <div className="bg-[#0B1120] rounded-xl p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-lg font-semibold">Student Performance Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <img
        src={studentResults || ''}
        alt="Student Results Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
);

const Dashboard = () => (
  <div className="bg-[#0B1120] rounded-xl p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-lg font-semibold">Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <img
        src={dashboard || ''}
        alt="Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
);

const DemoContactSection = () => (
  <div className="w-full text-center mt-16 space-y-4">
    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      For Demo, Contact Us
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Interested in seeing what our platform can do for you? Get in touch with us for a personalized demo.
    </p>
    <a
      href="/contact"
      className="bg-purple-600 text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-purple-700 transition duration-300 inline-block"
    >
      Contact Us
    </a>
  </div>
);

const AnalysisImage = () => (
  <div className="bg-[#0B1120] rounded-xl p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-lg font-semibold">Analysis Overview</h3>
    </div>
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <img
        src={analysis || ''}
        alt="Analysis Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
);

const InsightsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ['first', 'second', 'third', 'fourth'].forEach((section) => {
      gsap.fromTo(
        `.insights-dashboard-${section}`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `.insights-dashboard-${section}`,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(
        `.insights-content-${section}`,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: `.insights-content-${section}`,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const studentResultsInsights = [
    {
      title: "Comprehensive Performance Tracking",
      description: "Monitor individual and group progress with detailed analytics and visualized learning outcomes."
    },
    {
      title: "Personalized Learning Insights",
      description: "Identify strengths, weaknesses, and provide targeted recommendations for student improvement."
    }
  ];

  const challengeInsights = [
    {
      title: "Diverse Challenges",
      description: "Engage with a wide range of coding challenges across multiple difficulty levels and programming languages."
    },
    {
      title: "Real-world Scenarios",
      description: "Practice solving practical coding problems that mirror industry-standard interview and development challenges."
    }
  ];

  const insights = [
    {
      title: "Easy to use",
      description: "Our platform offers intuitive plugins that seamlessly integrate with your existing workflows."
    },
    {
      title: "All in one panel",
      description: "Access all your tools and analytics in a single, unified dashboard interface."
    }
  ];

  const trackingInsights = [
    {
      title: "Comprehensive Metrics",
      description: "Dive deep into granular analytics with real-time tracking of key performance indicators across multiple domains."
    },
    {
      title: "Customizable Dashboards",
      description: "Create personalized views that highlight the most critical insights for your specific business needs and goals."
    }
  ];

  return (
    <section className="w-full bg-black py-20 overflow-hidden" id="insights">
      <div className="container mx-auto px-4 space-y-32">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="insights-dashboard-first relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <Dashboard />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-12 insights-content-first">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Powerful Insights
              </h2>
              <p className="text-gray-400 max-w-xl">
                Transform your workflow with our comprehensive suite of AI-powered tools and analytics
              </p>
            </div>

            <div className="space-y-8">
              {insights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 space-y-12 insights-content-second">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Advanced Analytics Tracking
              </h2>
              <p className="text-gray-400 max-w-xl">
                Transform data into actionable insights with our powerful, intuitive tracking and reporting tools
              </p>
            </div>

            <div className="space-y-8">
              {trackingInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-2">
            <div className="insights-dashboard-second relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <AnalysisImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="insights-dashboard-third relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <CodingChallengesImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-12 insights-content-third">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Code & Grow
              </h2>
              <p className="text-gray-400 max-w-xl">
                Elevate your coding skills with targeted challenges and comprehensive learning paths
              </p>
            </div>

            <div className="space-y-8">
              {challengeInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-12 insights-content-fourth">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Student Performance Insights
              </h2>
              <p className="text-gray-400 max-w-xl">
                Empower educators with data-driven insights to enhance learning outcomes and student success
              </p>
            </div>

            <div className="space-y-8">
              {studentResultsInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="insights-dashboard-fourth relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <StudentResultsImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>
        </div>

        <DemoContactSection />
      </div>
    </section>
  );
};

export default InsightsSection;