import React, { forwardRef } from 'react';
import { ChatAlt2Icon } from './IconComponents';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Contact = forwardRef<HTMLElement>((props, ref) => {
  // FIX: Explicitly type the ref to HTMLDivElement for use on a div.
  const sectionRef = useAnimateOnScroll<HTMLDivElement>();
  
  return (
    <section ref={ref}>
      <div ref={sectionRef} className="py-20 bg-white/80 backdrop-blur-sm fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12">
            Have questions or a project in mind? We'd love to hear from you! Use our quote form, reach out directly via the contact info below, or start a live chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-full p-3">
                  <ChatAlt2Icon />
                </div>
            </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Live Chat</h3>
              <p className="text-slate-600">
                Look for the chat widget in the bottom right corner to start an instant conversation during business hours!
              </p>
            </div>

            <a 
              href="https://maps.app.goo.gl/ZbxY5A2rgm2Le6Dq6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 block"
            >
              <div className="flex justify-center mb-4">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Find Us</h3>
            <p className="text-slate-600">
                We are based in Riverbend, West London. Click here to view our location on Google Maps.
            </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;