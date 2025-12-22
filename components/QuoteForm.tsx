import React, { forwardRef, useEffect } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

interface QuoteFormProps {
  quoteReference: string;
  setQuoteReference: React.Dispatch<React.SetStateAction<string>>;
}

const QuoteForm = forwardRef<HTMLElement, QuoteFormProps>(({ quoteReference, setQuoteReference }, ref) => {
    // FIX: Explicitly type the ref to HTMLDivElement for use on a div.
    const headerRef = useAnimateOnScroll<HTMLDivElement>();

    useEffect(() => {
        // This effect can be used to highlight the input when its value changes
        // For simplicity, we keep the logic within the component.
    }, [quoteReference]);

    const inputStyles = "mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all";

    return (
        <section ref={ref} className="py-20 bg-white/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-12 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Request a Custom Quote</h2>
                    <p className="max-w-2xl mx-auto text-slate-600">
                        Ready to start your project? Provide as much detail as possible. For gallery items, use the "Add to Quote" button for easy reference.
                    </p>
                </div>
                <form id="quote-form" action="https://formspree.io/f/mjkwkleo" method="POST" className="bg-white/90 p-8 rounded-lg shadow-lg space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                            <input type="text" id="name" name="name" required className={inputStyles}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" id="email" name="_replyto" required className={inputStyles}/>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="material" className="block text-sm font-medium text-slate-700">Material Type</label>
                        <select id="material" name="material" className={inputStyles}>
                            <option value="" disabled>Select a material...</option>
                            <option value="Wood">Wood</option>
                            <option value="Acrylic">Acrylic</option>
                            <option value="Leather">Leather</option>
                            <option value="Lamicoid">Lamicoid</option>
                            <option value="Other">Other (specify in description)</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" required className={inputStyles}/>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-slate-700">Project Description</label>
                        <textarea id="description" name="description" rows={5} required className={inputStyles} placeholder="Tell us about your project, including dimensions, personalization, and any special instructions."></textarea>
                    </div>
                     <div>
                        <label htmlFor="image-reference" className="block text-sm font-medium text-slate-700">Image Reference (from gallery)</label>
                        <input type="text" id="image-reference" name="image-reference" value={quoteReference} onChange={(e) => setQuoteReference(e.target.value)} className={`${inputStyles} transition-all duration-300`} placeholder="Click 'Add to Quote' on gallery items"/>
                    </div>
                     <div>
                        <label htmlFor="coupon" className="block text-sm font-medium text-slate-700">Coupon Code (Optional)</label>
                        <input type="text" id="coupon" name="coupon" className={inputStyles} placeholder="Enter your coupon code"/>
                    </div>
                    <div className="text-center pt-4">
                        <button type="submit" className="w-full md:w-auto inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-50 transition-all transform hover:scale-105">
                            Get Quote
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
});

export default QuoteForm;