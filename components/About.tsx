import React, { forwardRef } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const About = forwardRef<HTMLElement>((props, ref) => {
  // FIX: Explicitly type the ref to HTMLHeadingElement for use on an h2.
  const titleRef = useAnimateOnScroll<HTMLHeadingElement>();
  // FIX: Explicitly type the ref to HTMLDivElement for use on a div.
  const contentRef = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section ref={ref} className="py-20 bg-slate-100/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 fade-in-up">About Forest City Laser</h2>
        <div ref={contentRef} className="prose prose-lg lg:prose-xl max-w-none text-slate-600 mx-auto text-left fade-in-up" style={{ transitionDelay: '100ms' }}>
          <p>
            Forest City Laser was born from the creative partnership between an engineer and an interior designer who wanted to combine technical precision with beautiful design. Together, we discovered our passion for bringing people's visions to life using cutting-edge laser technology.
          </p>
          <p>
            What started as our shared love for creating custom pieces has grown into a business dedicated to transforming ideas into tangible, personalized works of art. We blend engineering expertise with design sensibility to deliver exceptional results for every project.
          </p>
          <p>
            Proudly Canadian and based in <strong>Riverbend, West London, Ontario</strong>, we've been serving the greater Forest City community since 2021. We specialize in precision <strong>laser engraving and cutting</strong> for a variety of materials including custom wood, acrylic, leather, and industrial metals. Whether you are in <strong>Byron, Oakridge, Hyde Park, or Downtown London</strong>, we provide the perfect marriage of technical innovation and creative design for all your custom needs.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;