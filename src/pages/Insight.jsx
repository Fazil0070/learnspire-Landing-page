import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dashboard from '../assets/dashboard.png';
import analysis from '../assets/analysis.png';
import codingChallenges from '../assets/coding.png';
import studentResults from '../assets/results.png';
import prep from '../assets/prep.png';
import communication from '../assets/communication.png';
import profile from '../assets/profile.png';
import prepresult from '../assets/prepresult.png';
import performance from '../assets/performance.png';

const InsightCard = ({ title, description }) => {
  return (
    <div className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      </div>
      <p className="text-zinc-400 leading-relaxed pl-[3.25rem] group-hover:text-zinc-300 transition-colors">{description}</p>
    </div>
  );
};

InsightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const CodingChallengesImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Coding Challenges Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={codingChallenges || ''}
        alt="Coding Challenges Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const StudentResultsImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Student Performance Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={studentResults || ''}
        alt="Student Results Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const Dashboard = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={dashboard || ''}
        alt="Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const AnalysisImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Analysis Overview</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={analysis || ''}
        alt="Analysis Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const PrepDashboardImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Prep Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={prep || ''}
        alt="Prep Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const CommunicationImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Communication Test Suite</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={communication || ''}
        alt="Communication Dashboard"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const PMSImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Profile Management Dashboard</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={profile || ''}
        alt="Profile Management System"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const LearnspirePrepAnalyticsImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Learnspire Prep Analytics</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={prepresult || ''}
        alt="Learnspire Prep Analytics"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const PerformanceManagementSystemImage = () => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-sm">Performance Management System</h3>
    </div>
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
      <img
        src={performance || ''}
        alt="Performance Management System"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
);

const InsightsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth'].forEach((section) => {
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

  const prepDashboardInsights = [
    {
      title: "Coding Assessment Module",
      description: "Full coding test environment with sample inputs, expected outputs, and structured evaluation."
    },
    {
      title: "Company-Specific Coding Prep",
      description: "Curated programming challenges tailored for product & service-based companies."
    },
    {
      title: "Technical Coding Practice Room",
      description: "Daily problem-solving space designed to improve consistency and confidence."
    }
  ];

  const lsrwInsights = [
    {
      title: "Listening Assessment",
      description: "Audio-based comprehension with auto-evaluated responses."
    },
    {
      title: "Speaking Evaluation",
      description: "AI-assisted scoring for pronunciation, clarity, fluency, and coherence."
    },
    {
      title: "Reading Comprehension",
      description: "Timed passages with analytics on understanding and speed."
    },
    {
      title: "Writing Assessment",
      description: "Structured rubric-based evaluation for grammar, clarity, and composition."
    }
  ];

  const pmsInsights = [
    {
      title: "Comprehensive Student Profiling",
      description: "Students can easily fill and update their personal, academic, and professional details in a structured format."
    },
    {
      title: "Admin Data Management",
      description: "Admins have full control to view, manage, and download comprehensive student data reports for administrative use."
    }
  ];

  const prepAnalyticsInsights = [
    {
      title: "Structured Preparation Ecosystem",
      description: "Master coding, aptitude, communication, and placement-focused skills through a structured preparation ecosystem."
    },
    {
      title: "Industry-aligned Assessments",
      description: "Practice with industry-aligned assessments, track your progress, and identify areas for improvement."
    },
    {
      title: "Personalized Learning",
      description: "Build confidence, enhance employability, and become placement-ready with personalized learning and performance insights."
    }
  ];

  const performanceManagementInsights = [
    {
      title: "Centralized Student Profile",
      description: "Monitor every student's academic, assessment, coding, and communication performance through a centralized profile."
    },
    {
      title: "Actionable Insights",
      description: "Gain actionable insights with detailed analytics, rankings, progress tracking, and performance reports."
    },
    {
      title: "Data-Driven Development",
      description: "Identify skill gaps, measure growth, and support data-driven student development and placement readiness."
    }
  ];

  return (
    <section className="font-Kanit w-full bg-black py-24 overflow-hidden relative" id="insights">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Platform Insights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Everything you need,{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#f472b6,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              in one place
            </span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From dashboards and analytics to coding prep and communication assessments — explore how Learnspire empowers every part of the learning journey.
          </p>
        </div>

        <div className="space-y-32">
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

        {/* Fifth Section - Prep Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="insights-dashboard-fifth relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <PrepDashboardImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-12 insights-content-fifth">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Prep Dashboard
              </h2>
              <p className="text-gray-400 max-w-xl">
                A centralized preparation hub designed to help students build strong technical foundations and excel in company-specific coding challenges.
              </p>
            </div>

            <div className="space-y-8">
              {prepDashboardInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sixth Section - LSRW Communication Test Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 space-y-12 insights-content-sixth">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                LSRW Communication Test Suite
              </h2>
              <p className="text-gray-400 max-w-xl">
                Evaluate students' Listening, Speaking, Reading, and Writing skills with AI-driven accuracy and clear scoring rubrics.
              </p>
            </div>

            <div className="space-y-8">
              {lsrwInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-2">
            <div className="insights-dashboard-sixth relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <CommunicationImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="insights-dashboard-seventh relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <PMSImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-12 insights-content-seventh">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Profile Management System (PMS)
              </h2>
              <p className="text-gray-400 max-w-xl">
                A robust profile management system ensuring seamless data collection and administrative control.
              </p>
            </div>

            <div className="space-y-8">
              {pmsInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eighth Section - Learnspire Prep Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 space-y-12 insights-content-eighth">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Learnspire Prep Analytics
              </h2>
              <p className="text-gray-400 max-w-xl">
                Master coding, aptitude, communication, and placement-focused skills through a structured preparation ecosystem.
              </p>
            </div>

            <div className="space-y-8">
              {prepAnalyticsInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-2">
            <div className="insights-dashboard-eighth relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <LearnspirePrepAnalyticsImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>
        </div>

        {/* Ninth Section - Performance Management System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="insights-dashboard-ninth relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <PerformanceManagementSystemImage />
              <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-[120px]" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-12 insights-content-ninth">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Performance Management System
              </h2>
              <p className="text-gray-400 max-w-xl">
                Gain actionable insights with detailed analytics, rankings, progress tracking, and performance reports.
              </p>
            </div>

            <div className="space-y-8">
              {performanceManagementInsights.map((insight, index) => (
                <div key={index}>
                  <InsightCard {...insight} />
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default InsightsSection;