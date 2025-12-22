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
          
          <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-full p-3">
                  <ChatAlt2Icon />
                </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Live Chat Available</h3>
            <p className="text-slate-600">
              Look for the chat widget in the bottom right corner to start an instant conversation with us during business hours!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;