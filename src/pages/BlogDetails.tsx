import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, Folder, Quote } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { blogs } from '@/data/blogData';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false,
  });

  // Find current blog by slug
  const currentBlog = blogs.find((blog) => blog.slug === slug);

  // Scroll to top when blog changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // If blog not found, redirect to first blog
  useEffect(() => {
    if (!currentBlog && blogs.length > 0) {
      navigate(`/blog/${blogs[0].slug}`, { replace: true });
    }
  }, [currentBlog, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', formData);
    // Reset form
    setFormData({
      comment: '',
      name: '',
      email: '',
      website: '',
      saveInfo: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
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
        staggerChildren: 0.15
      }
    }
  };

  if (!currentBlog) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{currentBlog.title} - Dermal Blog</title>
        <meta name="description" content={currentBlog.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-[#FEF7F8]">
        <Header />

        <main >
          {/* ===== HERO SECTION ===== */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pt-0 lg:pt-8 px-0 md:px-0 lg:px-0 xl:px-4"
          >
            <div className="  mx-auto max-w-[1440px] lg:px-6">
              <div className="relative bg-[#24544B] xl:rounded-[30px] lg:rounded-[30px] py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
                {/* Decorative Leaf - Bottom Left */}
                <div className="absolute bottom-0 left-0 animate-[float_6s_ease-in-out_infinite]">
                  <img src="/image/leaf-bottom-left.png" alt="Leaf" className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48" />
                </div>
                {/* Decorative Leaf - Top Right */}
                <div className="absolute top-0 right-0 animate-[float_8s_ease-in-out_infinite]">
                  <img src="/image/leaf-top-right.png" alt="Leaf" className="w-100 h-100 md:w-100 md:h-100 lg:w-50 lg:h-50 xl:w-100 xl:h-100" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-7xl mx-auto">
                  <h1 className="font-heading text-[28px] sm:text-[36px] md:text-[48px] lg:text-[50px] leading-tight text-white mb-6">
                    {currentBlog.title}
                  </h1>
                  <div className="flex items-center justify-center gap-4 lg:gap-6 text-white font-body text-base lg:text-lg flex-wrap">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{currentBlog.date}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <Folder className="w-5 h-5" />
                      <span>{currentBlog.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ===== MAIN IMAGE ===== */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-10 lg:py-16 px-4 md:px-6 lg:px-8"
          >
            <div className="  mx-auto max-w-9xl px-0 md:px-0 lg:px-0 xl:px-16">
              <div className="group relative rounded-[30px] overflow-hidden shadow-lg">
                {/* Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                <img
                  src={currentBlog.contentImage}
                  alt={currentBlog.title}
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* ===== ARTICLE CONTENT ===== */}
          <section className="xl:container pb-16 lg:pb-24 px-4 md:px-6 lg:px-8 xl:px-28">
            <div className=" mx-auto max-w-[1250px]">
              {/* Intro Paragraphs */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                {currentBlog.content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-body text-[#7B798C] text-base lg:text-lg leading-relaxed mb-6"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              {/* Blockquote */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#1C4942] rounded-[20px] p-8 lg:p-10 my-10 flex flex-col lg:flex-row items-start gap-4"
              >
                <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-white flex-shrink-0" />
                <p className="font-heading text-lg lg:text-xl text-white leading-relaxed">
                  {currentBlog.quote}
                </p>
              </motion.div>

              {/* Subheading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-heading text-[28px] lg:text-[36px] text-[#1C4942] mb-6 mt-12"
              >
                {currentBlog.subheading}
              </motion.h2>

              {/* Summary */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-body text-[#7B798C] text-base lg:text-lg leading-relaxed mb-8"
              >
                {currentBlog.summary}
              </motion.p>

              {/* Takeaways List */}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="space-y-4 mb-8"
              >
                {currentBlog.takeaways.map((takeaway, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-start gap-3 font-body text-[#7B798C] text-base lg:text-lg"
                  >
                    <span className="mt-2 w-2 h-2 bg-[#1C4942] rounded-full flex-shrink-0" />
                    <span>{takeaway}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Closing Paragraph */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-body text-[#7B798C] text-base lg:text-lg leading-relaxed mb-10"
              >
                {currentBlog.closingParagraph}
              </motion.p>

              {/* Tags */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-3 mb-16 pb-12 border-b border-[#7B798C]/20"
              >
                <span className="font-heading text-xl lg:text-[22px] text-[#1C4942]">
                  Tags:
                </span>
                {currentBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#1C4942] text-white font-body text-sm lg:text-base px-5 py-2.5 rounded-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* ===== COMMENT FORM ===== */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="pt-12"
              >
                <motion.h3
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-heading text-[28px] lg:text-[30px] text-[#1C4942] mb-4"
                >
                  Leave a Reply
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-body text-[#7B798C] text-base lg:text-lg mb-8"
                >
                  Your email address will not be published. Required fields are marked *
                </motion.p>

                <motion.form
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Comment Textarea */}
                  <div>
                    <label
                      htmlFor="comment"
                      className="block font-body text-[#1C4942] text-base mb-2"
                    >
                      Comment *
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full h-[260px] bg-white border border-[#7B798C]/20 rounded-[14px] px-5 py-4 font-body text-[#1C4942] placeholder:text-[#7B798C]/50 focus:outline-none focus:ring-2 focus:ring-[#24544B] resize-none"
                      placeholder="Write your comment..."
                    />
                  </div>

                  {/* Name, Email, Website Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-body text-[#1C4942] text-base mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-white border border-[#7B798C]/20 rounded-[14px] px-5 font-body text-[#1C4942] placeholder:text-[#7B798C]/50 focus:outline-none focus:ring-2 focus:ring-[#24544B]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-body text-[#1C4942] text-base mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-white border border-[#7B798C]/20 rounded-[14px] px-5 font-body text-[#1C4942] placeholder:text-[#7B798C]/50 focus:outline-none focus:ring-2 focus:ring-[#24544B]"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block font-body text-[#1C4942] text-base mb-2"
                      >
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full h-14 bg-white border border-[#7B798C]/20 rounded-[14px] px-5 font-body text-[#1C4942] placeholder:text-[#7B798C]/50 focus:outline-none focus:ring-2 focus:ring-[#24544B]"
                        placeholder="Your website (optional)"
                      />
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded border-[#7B798C]/30 text-[#24544B] focus:ring-[#24544B]"
                    />
                    <label
                      htmlFor="saveInfo"
                      className="font-body text-[#7B798C] text-sm lg:text-base"
                    >
                      Save my name, email, and website in this browser for the next time I
                      comment.
                    </label>
                  </div>

                  {/* Submit Button */}
                 <AnimatedButton type="submit" variant="primary" className="mt-10 w-fit">
                    Post Comment
                  </AnimatedButton>
                </motion.form>
              </motion.div>
            </div>
          </section>


        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetails;
