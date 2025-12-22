import React, { forwardRef } from 'react';
import { SearchIcon, PencilAltIcon, CashIcon, CogIcon, CheckCircleIcon } from './IconComponents';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const processSteps = [
  { icon: <SearchIcon />, title: "Browse & Inquire", description: "Explore our portfolio for inspiration or bring your unique idea. Use the quote form to tell us about your project." },
  { icon: <PencilAltIcon />, title: "Collaborate & Design", description: "We'll discuss the details with you. For custom work, you'll receive a digital CAD design proof for approval." },
  { icon: <CashIcon />, title: "Invoice & Payment", description: "Once the design is approved, we'll send an invoice. Payment is required before production begins to secure your order." },
  { icon: <CogIcon />, title: "Production", description: "Our precision lasers get to work, crafting your items with care based on the approved design." },
  { icon: <CheckCircleIcon />, title: "Completion & Delivery", description: "We'll notify you when your order is ready for shipping or local collection from the Riverbend area." }
];

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => {
  // FIX: Explicitly type the ref to HTMLLIElement for use on an li.
  const stepRef = useAnimateOnScroll<HTMLLIElement>();
  return (
    <li ref={stepRef} className="relative pl-14 fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Dot and Icon */}
      <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full text-white ring-8 ring-slate-100/80">
        {step.icon}
      </div>
      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-md font-bold text-indigo-600 mb-1">{`Step ${index + 1}`}</h4>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
        <p className="text-slate-600">{step.description}</p>
      </div>
    </li>
  );
};

const Process = forwardRef<HTMLElement>((props, ref) => {
  // FIX: Explicitly type the ref to HTMLDivElement for use on a div.
  const headerRef = useAnimateOnScroll<HTMLDivElement>();
  
  return (
    <section ref={ref} className="py-20 bg-slate-100/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Simple Process</h2>
          <p className="max-w-2xl mx-auto text-slate-600 mb-16">
            From idea to finished product, we make bringing your vision to life easy and transparent.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-slate-300" aria-hidden="true"></div>
            
            <ul className="space-y-12">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.title} step={step} index={index} />
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
});

export default Process;