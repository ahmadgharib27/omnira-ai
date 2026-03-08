import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Bot, Workflow, CheckCircle2, TrendingUp, Clock, Menu, X, ArrowRight, Target, Zap, ShieldCheck, Lightbulb } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="36" height="36" viewBox="0 0 100 100" className="text-brand-500">
      {/* Outer Triangle */}
      <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Inner Triangle (Solid) */}
      <polygon points="50,40 75,85 25,85" fill="#0ea5e9" opacity="0.9" />
      {/* Connecting Lines */}
      <line x1="50" y1="15" x2="50" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="85" x2="25" y2="85" stroke="currentColor" strokeWidth="2" />
      <line x1="90" y1="85" x2="75" y2="85" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="15" x2="25" y2="85" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="15" x2="75" y2="85" stroke="currentColor" strokeWidth="2" />
      {/* Nodes */}
      <circle cx="50" cy="15" r="5" fill="#38bdf8" />
      <circle cx="90" cy="85" r="5" fill="#38bdf8" />
      <circle cx="10" cy="85" r="5" fill="#38bdf8" />
      <circle cx="50" cy="40" r="4" fill="#bae6fd" />
      <circle cx="25" cy="85" r="4" fill="#bae6fd" />
      <circle cx="75" cy="85" r="4" fill="#bae6fd" />
    </svg>
    <span className="text-2xl font-bold tracking-tight text-white">
      Omnira <span className="text-brand-500">AI</span>
    </span>
  </div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-dark text-slate-200 selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <a href="#contact" className="hidden md:flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
            Get Started
          </a>

          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-brand-600 text-white px-6 py-3 rounded-full font-medium w-full text-center">
              Get Started
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-network">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        {/* Decorative glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Connect. Automate. <span className="text-brand-400 text-glow">Scale.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4">
              AI Automation for Growing Businesses
            </p>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Automate your leads, operations, and customer interactions with intelligent AI systems. Done-for-you AI Plan. Build. Deploy. In just 90 Days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                Book Your Free Automation Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We create hands-off AI systems for you, plugging straight into your existing systems for fast, disruption-free deployment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20 text-brand-400">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Lead Generation</h3>
              <p className="text-slate-400 leading-relaxed">
                Automate your outreach & scheduling. We build AI sales bots that qualify leads and book meetings 24/7.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-[40px] rounded-full"></div>
              <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20 text-brand-400 relative z-10">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">AI Customer Agents</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                24/7 AI chat support for your clients. Enhance customer engagement and aftercare without expanding your team.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 border border-brand-500/20 text-brand-400">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
              <p className="text-slate-400 leading-relaxed">
                Streamline your business processes. From CRM systems to reporting dashboards that reduce costs and boost efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 border-y border-white/5 bg-bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Results</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The results speak for themselves. We know the systems that get results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <div className="flex items-center gap-3 text-brand-400 mb-4">
                <Clock className="w-8 h-8" />
                <span className="text-4xl md:text-5xl font-bold text-white">40+</span>
              </div>
              <h4 className="text-lg font-medium text-slate-300">Hours Saved</h4>
              <p className="text-sm text-slate-500 mt-1">Per Month</p>
            </div>

            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <div className="flex items-center gap-3 text-brand-400 mb-4">
                <TrendingUp className="w-8 h-8" />
                <span className="text-4xl md:text-5xl font-bold text-white">3x</span>
              </div>
              <h4 className="text-lg font-medium text-slate-300">More Qualified Leads</h4>
              <p className="text-sm text-slate-500 mt-1">Generated Automatically</p>
            </div>

            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <div className="flex items-center gap-3 text-brand-400 mb-4">
                <CheckCircle2 className="w-8 h-8" />
                <span className="text-4xl md:text-5xl font-bold text-white">24/7</span>
              </div>
              <h4 className="text-lg font-medium text-slate-300">Automated Support</h4>
              <p className="text-sm text-slate-500 mt-1">Always Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Omnira AI</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  Founded in 2026, Omnira AI is a cutting-edge AI automation agency dedicated to helping businesses streamline operations, boost efficiency, and unlock new growth opportunities. Our team combines deep expertise in AI, automation, and digital strategy to deliver tailor-made solutions that save time, reduce costs, and increase revenue.
                </p>
                <p>
                  Our mission is to make AI accessible and practical for businesses of all sizes. We believe that intelligent automation should not just be a luxury—it should be a core part of how companies operate in the modern digital landscape.
                </p>
                <p>
                  Whether you're a small business looking to automate day-to-day tasks or a large company aiming to scale operations efficiently, Omnira AI is your partner in transformation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4 text-brand-400 border border-brand-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold mb-2">Smart Automation</h4>
                <p className="text-sm text-slate-400">Automating repetitive tasks with intelligent AI tools to free up your team.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4 text-brand-400 border border-brand-500/20">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold mb-2">AI Workflows</h4>
                <p className="text-sm text-slate-400">Building robust, AI-powered workflows tailored for your business operations.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4 text-brand-400 border border-brand-500/20">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold mb-2">Data-Driven</h4>
                <p className="text-sm text-slate-400">Implementing solutions that improve decision-making and business intelligence.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4 text-brand-400 border border-brand-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold mb-2">Strategic Audits</h4>
                <p className="text-sm text-slate-400">Offering comprehensive AI audits to identify your best growth opportunities.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Book Your AI Audit
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                Interested in learning more about how AI can help your business scale?
              </p>
              <p className="text-lg text-slate-400">
                Provide your details here and we'll be in touch about booking your free AI audit:
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first & last name here" 
                    className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Provide your email address*</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address here" 
                    className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Service of Interest*</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="service" value="lead-gen" className="peer appearance-none w-5 h-5 border border-white/20 rounded-full checked:border-brand-500 transition-colors" required />
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">AI Lead Generation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="service" value="customer-agents" className="peer appearance-none w-5 h-5 border border-white/20 rounded-full checked:border-brand-500 transition-colors" />
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">AI Customer Agents</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="service" value="workflow" className="peer appearance-none w-5 h-5 border border-white/20 rounded-full checked:border-brand-500 transition-colors" />
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">Workflow Automation</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">About your business*</label>
                  <textarea 
                    rows={4} 
                    placeholder="Provide a brief description of your business here" 
                    className="w-full bg-bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                  Schedule Your Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-bg-dark py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Omnira AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
