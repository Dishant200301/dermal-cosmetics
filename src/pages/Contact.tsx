import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Dermal Dermatology Clinic</title>
        <meta name="description" content="Get in touch with Dermal dermatology clinic. Contact us for consultations, treatments, and skincare advice." />
      </Helmet>
      <div className="min-h-screen bg-[#FEF7F8] overflow-hidden">
        <Header />
        <main>
          {/* Hero Banner */}
          <section className=" mx-auto  lg:px-8 lg:pt-2">
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative Leaf - Top Left */}
              {/* <svg width="194" height="224" viewBox="0 0 194 224" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="194" height="224" fill="url(#pattern0_5_3299)"/>
<defs>
<pattern id="pattern0_5_3299" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_5_3299" transform="scale(0.00515464 0.00446429)"/>
</pattern>
<image id="image0_5_3299" width="194" height="224" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>


              Decorative Leaf - Bottom Right
              <svg width="1800" height="355" viewBox="0 0 1800 355" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="1800" height="355" rx="30" fill="url(#pattern0_5_3298)"/>
<defs>
<pattern id="pattern0_5_3298" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_5_3298" transform="matrix(0.000555556 0 0 0.0028169 0.9 0.140845)"/>
</pattern>
<image id="image0_5_3298" width="180" height="132" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg> */}


              {/* Hero Content */}
              <h1 className="font-heading text-white text-4xl md:text-[56px] mb-4 md:mb-6 z-10">
                Contact us
              </h1>
              <div className="font-body text-white text-base md:text-lg z-10">
                <span className="opacity-70">Home</span>
                <span className="mx-2">/</span>
                <span>Contact Us</span>
              </div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Image Card */}
              <div className="relative rounded-[30px] overflow-hidden h-[500px] lg:h-[650px]">
                <img
                  src="/image/contact.png"
                  alt="Dermatology Treatment"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C4942]/90 via-transparent to-transparent" />

                {/* Opening Hours Box */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F7F0F2] rounded-[14px] p-4 flex-shrink-0">
                      <Clock className="w-8 h-8 text-[#1C4942]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl mb-3">Opening Hours</h3>
                      <p className="font-body text-base md:text-lg leading-relaxed">
                        Mon–Sat: 10:00 to 07:00 pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Content */}
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-[#1C4942] text-3xl md:text-[50px] leading-tight mb-4">
                  Get in touch with us
                </h2>
                <p className="font-body text-[#7B798C] text-base md:text-lg mb-8">
                  Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-[60px] px-5 rounded-[14px] border border-[#7B798C14] font-body text-base placeholder:text-[#7B798C] focus:outline-none focus:border-[#24544B] transition-colors"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-[60px] px-5 rounded-[14px] border border-[#7B798C14] font-body text-base placeholder:text-[#7B798C] focus:outline-none focus:border-[#24544B] transition-colors"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-[60px] px-5 rounded-[14px] border border-[#7B798C14] font-body text-base placeholder:text-[#7B798C] focus:outline-none focus:border-[#24544B] transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-[60px] px-5 rounded-[14px] border border-[#7B798C14] font-body text-base placeholder:text-[#7B798C] focus:outline-none focus:border-[#24544B] transition-colors"
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Write Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-4 rounded-[14px] border border-[#7B798C14] font-body text-base placeholder:text-[#7B798C] focus:outline-none focus:border-[#24544B] resize-none transition-colors"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-[#24544B] text-white font-body font-medium px-10 py-4 rounded-[30px] hover:bg-[#1C4942] transition-colors inline-flex items-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-12 lg:pb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Phone Card */}
              <div className="bg-[#1C4942] rounded-[30px] p-8 flex items-center gap-6 min-h-[150px]">
                <div className="bg-[#F7F0F2] rounded-[14px] p-4 flex-shrink-0">
                  <Phone className="w-7 h-7 text-[#1C4942]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-xl md:text-[22px] mb-2">Phone</h3>
                  <p className="font-body text-white text-base md:text-lg">
                    +1 02 345 789<br />
                    +1 02 345 687
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-[#1C4942] rounded-[30px] p-8 flex items-center gap-6 min-h-[150px]">
                <div className="bg-[#F7F0F2] rounded-[14px] p-4 flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[#1C4942]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-xl md:text-[22px] mb-2">Address</h3>
                  <p className="font-body text-white text-base md:text-lg">
                    2464 Royal Ln. Mesa,<br />
                    CA 45463, USA
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#1C4942] rounded-[30px] p-8 flex items-center gap-6 min-h-[150px]">
                <div className="bg-[#F7F0F2] rounded-[14px] p-4 flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#1C4942]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-xl md:text-[22px] mb-2">Email</h3>
                  <p className="font-body text-white text-base md:text-lg">
                    support@dermal.com<br />
                    info@dermal.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Google Map Section */}
          <section className=" mx-auto px-4 lg:px-8 pb-12 lg:pb-20">
            <div className="rounded-[30px] overflow-hidden h-[400px] md:h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374978244!2d-73.98823492346445!3d40.75797097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                title="Dermal Clinic Location"
                  />
                </div>
          </section>

          {/* Infinity Marquee */}
          <Marquee />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
