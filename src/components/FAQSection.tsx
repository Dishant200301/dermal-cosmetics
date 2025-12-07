import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './icons';

const faqs = [
  {
    question: 'What types of treatments do you offer?',
    answer: 'We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.',
  },
  {
    question: 'Do I need a consultation before getting treatment?',
    answer: 'Yes, we recommend a consultation to assess your skin condition and create a personalized treatment plan that best suits your needs.',
  },
  {
    question: 'Are your treatments suitable for all skin types?',
    answer: 'Absolutely! Our expert dermatologists are trained to work with all skin types and customize treatments accordingly.',
  },
  {
    question: 'Do you offer cosmetic dermatology services?',
    answer: 'Yes, we offer a full range of cosmetic services including Botox, fillers, chemical peels, laser treatments, and more.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'During your first visit, our dermatologist will review your medical history, examine your skin, and discuss your concerns and goals.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#fef7f8] py-16 lg:py-10 relative overflow-hidden">
      {/* Decorative leaves */}
      <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M20 80C40 70 50 50 50 20C30 30 20 50 20 80Z" stroke="currentColor" strokeWidth="1" className="text-white"/>
      </svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M80 80C60 70 50 50 50 20C70 30 80 50 80 80Z" stroke="currentColor" strokeWidth="1" className="text-white"/>
        <circle cx="75" cy="75" r="10" stroke="currentColor" strokeWidth="1" className="text-white"/>
      </svg>

      <div className="container mx-auto px-0 lg:px-8 xl:px-0">
        <div className="bg-deep-green-800 lg:rounded-30 xl:rounded-30 p-8 lg:p-12 xl:p-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-white/80 font-body mb-4">
                <span className="w-2 h-2 rounded-full bg-white/80"></span>
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-white mb-4">
                Frequently asked question<br />find out more
              </h2>
              <p className="font-body text-lg text-white/70 mb-8">
                Have questions about our dermatology services? Our 'Frequently Asked Questions' section.
              </p>
              <Link to="/contact" className="btn-secondary w-fit">
                View All FAQs
                <ArrowIcon className='text-[#1C4942]'/>
              </Link>
            </div>

            {/* Right - Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b border-white/20 pb-4 ${index === 0 ? 'border-t pt-4' : ''}`}
                >
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-heading text-lg lg:text-xl text-white pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                    }`}
                  >
                    <p className="font-body text-white/70">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
