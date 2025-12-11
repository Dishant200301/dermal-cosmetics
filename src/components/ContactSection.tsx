import React, { useState } from "react";
import { MapPin, Phone, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion"; // <-- Import motion
import { AnimatedButton } from "./AnimatedButton";

// ====================================================================
// FRAMER MOTION VARIANTS
// ====================================================================

// 1. Variant for Individual Elements (Fade Up)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Animation duration
      ease: "easeOut"
    }
  }
};

// 2. Container Variant (Staggering)
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between the start of each child's animation (0.15s)
    }
  }
};


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook your API / toast here
    console.log("Contact form submitted:", formData);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#fef7f8] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 xl:px-4">
        {/* Rounded main container */}
        <div className="rounded-[30px] bg-[#F7F0F2] border border-[#E3D4D9] px-4 py-8 sm:p-8 lg:p-10 xl:py-12 xl:px-24">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">

            {/* =====================================================================================
                LEFT: Address + Map (second on mobile) - STAGGER CONTAINER
            ===================================================================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer} // Parent controls the stagger for this column
              className="order-2 lg:order-1 space-y-6"
            >
              {/* Top address / phone row (1st sequence item) */}
              <motion.div variants={fadeInUp} className="grid gap-4 sm:gap-6 sm:grid-cols-2">

                {/* Address Box (single motion.div for the whole box) */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#24544B]">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-body text-[15px] sm:text-[16px] md:text-[18px] leading-snug text-[#7B798C]">
                    2464 Royal Ln. Mesa,
                    <br />
                    New Jersey 45463
                  </p>
                </div>

                {/* Phone Box (single motion.div for the whole box) */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#24544B]">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="font-body text-[15px] sm:text-[16px] md:text-[18px] leading-snug text-[#7B798C]">
                    <p>(684) 555-012</p>
                    <p>(704) 555-127</p>
                  </div>
                </div>
              </motion.div>

              {/* Map (2nd sequence item) */}
              <motion.div variants={fadeInUp} className="rounded-[30px] overflow-hidden h-[350px] sm:h-[380px] md:h-[420px] lg:h-[600px]">
                <iframe
                  title="Dermal Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.510697047333!2d-0.13001682567447082!3d51.50329788119752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce5b5e1851%3A0x676f5c2d8eab73e0!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1701234567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

            {/* =====================================================================================
                RIGHT: Form (first on mobile) - STAGGER CONTAINER
            ===================================================================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer} // Parent controls the stagger for this column
              className="order-1 lg:order-2"
            >
              {/* Heading Group (1st, 2nd, 3rd sequence items) */}
              <div className="mb-6 sm:mb-8">
                {/* Subheading (1st) */}
                <motion.div variants={fadeInUp} className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#24544B]" />
                  <span className="font-body text-[14px] sm:text-[15px] md:text-[16px] text-[#7B798C]">
                    Book A Appointment
                  </span>
                </motion.div>
                {/* Heading (2nd) */}
                <motion.h2 variants={fadeInUp} className="font-heading text-[28px] leading-tight text-[#1C4942] sm:text-[32px] md:text-[40px] lg:text-[50px] mb-3">
                  Reach out to us today!
                </motion.h2>
                {/* Description (3rd) */}
                <motion.p variants={fadeInUp} className="font-body text-[14px] sm:text-[15px] md:text-[16px] text-[#7B798C] max-w-xl">
                  It’s time to take control of your skin health! Booking your
                  appointment is easy and fast. Choose a time that works for you
                  and our dermatology experts will be ready.
                </motion.p>
              </div>

              {/* FORM (The form fields will animate sequentially after the header) */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 (4th sequence item) */}
                <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name Here"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-[60px] w-full rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 font-body text-[15px] md:text-[16px] text-[#1C4942] placeholder:text-[#7B798C] focus:border-[#24544B] focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-[60px] w-full rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 font-body text-[15px] md:text-[16px] text-[#1C4942] placeholder:text-[#7B798C] focus:border-[#24544B] focus:outline-none"
                  />
                </motion.div>

                {/* Row 2 (5th sequence item) */}
                <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-[60px] w-full rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 font-body text-[15px] md:text-[16px] text-[#1C4942] placeholder:text-[#7B798C] focus:border-[#24544B] focus:outline-none"
                  />
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="h-[60px] w-full rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 pr-12 font-body text-[15px] md:text-[16px] text-[#7B798C] focus:border-[#24544B] focus:outline-none appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%237B798C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1.25rem center',
                      }}
                    >
                      <option value="">Select Service</option>
                      <option value="dermal-fillers">Dermal Fillers</option>
                      <option value="chemical-peels">Chemical Peels</option>
                      <option value="acne-treatment">Acne Treatment</option>
                      <option value="skin-tightening">Skin Tightening</option>
                      <option value="scar-revision">Scar Revision</option>
                      <option value="wrinkle-reduction">Wrinkle Reduction</option>
                    </select>
                  </div>
                </motion.div>

                {/* Row 3 (6th sequence item) */}
                <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2">
                  {/* Date with icon */}
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      placeholder="mm/dd/yyyy"
                      className="h-[60px] w-full rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 pr-4 font-body text-[15px] md:text-[16px] text-[#7B798C] focus:border-[#24544B] focus:outline-none"
                    />
                  </div>

                  {/* Time with icon */}
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="h-[60px] w-full rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 pr-12 font-body text-[15px] md:text-[16px] text-[#7B798C] focus:border-[#24544B] focus:outline-none appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%237B798C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1.25rem center',
                      }}
                    >
                      <option value="">Choose Time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </motion.div>

                {/* Description (7th sequence item) */}
                <motion.div variants={fadeInUp}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Description here about service or your problem..."
                    className="h-[150px] w-full resize-none rounded-[14px] border border-[rgba(123,121,140,0.14)] bg-white px-5 py-4 font-body text-[15px] md:text-[16px] text-[#1C4942] placeholder:text-[#7B798C] focus:border-[#24544B] focus:outline-none"
                    required
                  />
                </motion.div>

                {/* Button (8th sequence item) */}
                <motion.div variants={fadeInUp}>
                  <AnimatedButton type="submit" variant="primary" className="w-fit">
                    Send Message
                  </AnimatedButton>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;