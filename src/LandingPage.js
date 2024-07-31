import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, RefreshCw, MessageCircle, Users, Rocket, ChartBar, Clock, Menu, X } from 'lucide-react';

const AIPattern = () => (
  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ai-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="40" height="40" fill="none" stroke="#e0e7ff" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ai-grid)" />
    {[...Array(20)].map((_, i) => (
      <g key={i}>
        <circle cx={Math.random() * 800} cy={Math.random() * 600} r={Math.random() * 20 + 5} fill="#3b82f6" opacity="0.2" />
        <path d={`M${Math.random() * 800},${Math.random() * 600} Q${Math.random() * 800},${Math.random() * 600} ${Math.random() * 800},${Math.random() * 600}`} stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3" />
      </g>
    ))}
  </svg>
);

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const waitlistRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Co-SDR</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
              <li><motion.button 
                onClick={scrollToWaitlist}
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Join Waitlist</motion.button></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
              <li><motion.button 
                onClick={scrollToWaitlist}
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Join Waitlist</motion.button></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Meet Your AI Co-pilot for B2B Sales
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Co-SDR empowers your sales development team with AI-driven insights, automation, and personalized coaching. Elevate your outreach, boost productivity, and close more deals – together.
              </motion.p>
              <motion.button
                onClick={scrollToWaitlist}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Amplify Your Sales Team
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="rounded-lg shadow-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <AIPattern />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Your AI Partner in Sales Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Brain, title: "Intelligent Lead Prioritization", description: "Focus on high-potential prospects with AI-driven lead scoring" },
              { icon: Zap, title: "Personalized Outreach at Scale", description: "Craft tailored messages that resonate with each prospect" },
              { icon: Target, title: "Predictive Pipeline Analytics", description: "Forecast outcomes and optimize your sales strategy" },
              { icon: RefreshCw, title: "Adaptive Learning Engine", description: "Continuously improve based on interactions and outcomes" },
              { icon: MessageCircle, title: "AI Conversation Coach", description: "Receive real-time guidance during prospect interactions" },
              { icon: Users, title: "Team Collaboration Boost", description: "Share insights and winning strategies across your team" },
              { icon: Rocket, title: "Productivity Amplifier", description: "Automate routine tasks and focus on high-impact activities" },
              { icon: ChartBar, title: "Performance Analytics", description: "Gain deep insights into individual and team performance" },
              { icon: Clock, title: "Time-Saving Automation", description: "Streamline workflows and eliminate repetitive tasks" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How Co-SDR Elevates Your Sales Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
            {[
              { title: "Seamless Integration", description: "Connect Co-SDR with your existing CRM and sales tools" },
              { title: "AI-Powered Analysis", description: "Our AI processes your data and learns your unique sales patterns" },
              { title: "Personalized Insights", description: "Receive tailored recommendations for each prospect and situation" },
              { title: "Continuous Improvement", description: "Adapt and refine strategies based on ongoing results and feedback" },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Sales Leaders Are Saying</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl italic mb-6">"Co-SDR has been a game-changer for our sales development team. It's like having a brilliant sales strategist guiding each SDR, helping them make smarter decisions and have more impactful conversations. Our productivity has soared, and our SDRs feel more confident than ever."</p>
              <p className="font-semibold text-gray-800">Alex Chen, Director of Sales Development at InnovateX</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={waitlistRef} className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Supercharge Your SDR Team?</h2>
          <p className="text-xl mb-10">Join our waitlist and be among the first to experience the future of B2B sales development.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 sm:px-0">
           <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-full p-1 overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-gray-800 focus:outline-none"
                required
              />
              <motion.button
                type="submit"
                className="w-full sm:w-auto bg-blue-800 text-white px-6 py-3 font-semibold sm:rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </form>
          {isSubmitted && (
            <motion.p
              className="text-white text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Thanks for joining! We'll be in touch soon with exclusive Co-SDR updates.
            </motion.p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Co-SDR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;