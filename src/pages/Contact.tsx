import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ArrowIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';

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

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Dermal Dermatology Clinic</title>
        <meta name="description" content="Get in touch with Dermal dermatology clinic. Contact us for consultations, treatments, and skincare advice." />
      </Helmet>
      <div className="min-h-screen bg-[#FEF7F8] ">
        <Header />
        <main className='overflow-hidden'>
          {/* Hero Banner */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" lg:container xl:container mx-auto  lg:px-8 lg:pt-2"
          >
            <div className="relative bg-[#24544B] lg:rounded-[30px] lg:h-[280px] md:h-[350px] h-[210px] flex flex-col items-center justify-center ">
              {/* Decorative Leaf - Top Left */}
              <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite]">
                <img src="/image/leaf-bottom-left.png" alt="Leaf" className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48" />
              </div>
              {/* Decorative Leaf - Top Right */}
              <div className="absolute top-0 right-0 animate-[float_8s_ease-in-out_infinite]">
                <img src="/image/leaf-top-right.png" alt="Leaf" className="w-100 h-100 md:w-100 md:h-100 lg:w-50 lg:h-50 xl:w-100 xl:h-100" />
              </div>

              {/* Hero Content */}
              <h1 className="font-heading text-white text-4xl md:text-[56px] mb-4 md:mb-6 z-10">
                Contact us
              </h1>
              <div className="font-body text-white text-base md:text-lg z-10">
                <a href="/" className="opacity-70">Home</a>
                <span className="mx-2">/</span>
                <span>Contact Us</span>
              </div>
            </div>
          </motion.section>

          {/* Main Contact Section */}
          <section className="max-w-7xl xl:container mx-auto px-4 lg:px-8  py-12 lg:py-20 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            >
              {/* Left Column - Image Card */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-[30px] overflow-hidden h-[500px] lg:h-[650px]"
              >
                {/* Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

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
              </motion.div>

              {/* Right Column - Form Content */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col justify-center"
              >
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
                      className=" w-full h-[60px] px-5 rounded-[14px] border border-[#7B798C14] font-body text-base placeholder:text-[#7B798C] focus:outline-none focus:border-[#24544B] transition-colors"
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

                  <AnimatedButton type="submit" variant="primary" className="mt-10 w-fit">
                    Send Message
                  </AnimatedButton>
                </form>
              </motion.div>
            </motion.div>
          </section>

          {/* Contact Info Cards */}
          <section className="max-w-7xl xl:container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:pb-20 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >

              {/* Phone Card */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#1C4942] rounded-[30px] p-5 sm:p-6 lg:p-8 flex items-center gap-4 min-h-[120px]"
              >
                <div className="bg-[#F7F0F2] rounded-[14px] p-3 sm:p-4 flex-shrink-0">
                  <Phone className="w-7 h-7 text-[#1C4942]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-lg sm:text-xl md:text-[22px] mb-1 sm:mb-2">
                    Phone
                  </h3>
                  <p className="font-body text-white text-sm sm:text-base md:text-lg lg:text-md leading-[22px]">
                    +1 02 345 789<br />
                    +1 02 345 687
                  </p>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#1C4942] rounded-[30px] p-5 sm:p-6 lg:p-6 flex items-center gap-4 sm:gap-6 min-h-[120px] sm:min-h-[150px]"
              >
                <div className="bg-[#F7F0F2] rounded-[14px] p-3 sm:p-4 flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[#1C4942]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-lg sm:text-xl md:text-[22px] mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="font-body text-white text-sm sm:text-base md:text-lg  lg:text-md leading-[22px]">
                    2464 Royal Ln. Mesa,<br />
                    CA 45463, USA
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#1C4942] rounded-[30px] p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 min-h-[120px] sm:min-h-[150px]"
              >
                <div className="bg-[#F7F0F2] rounded-[14px] p-3 sm:p-4 flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#1C4942]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-lg sm:text-xl md:text-[22px] mb-1 sm:mb-2">
                    Email
                  </h3>
                  <p className="font-body text-white text-sm sm:text-base md:text-lg lg:text-md leading-[22px]">
                    support@dermal.com<br />
                    info@dermal.com
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </section>


          {/* Google Map Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" mx-auto px-4 lg:px-8 pb-12 lg:pb-20"
          >
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
          </motion.section>

          {/* Infinity Marquee */}
          <Marquee />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
