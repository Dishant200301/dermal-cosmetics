import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, Folder, Quote } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { blogs } from '@/data/blogData';

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

        <main>
          {/* ===== HERO SECTION ===== */}
          <section className="pt-6 lg:pt-8 px-4 md:px-6 lg:px-4">
            <div className=" mx-auto max-w-[1440px]">
              <div className="relative bg-[#24544B] rounded-[30px] py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
                {/* Decorative Leaf - Left */}
                <div className="absolute top-0 left-0 w-24 h-24 lg:w-40 lg:h-40 opacity-20 -translate-x-4 -translate-y-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none">
                    <path
                      d="M20 80C20 80 30 60 40 50C50 40 60 30 80 20C60 30 50 40 40 50C30 60 20 80 20 80Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M25 75C25 75 35 60 42 52C48 45 55 38 70 28"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Decorative Leaf - Right */}
                <div className="absolute bottom-0 right-0 w-24 h-24 lg:w-40 lg:h-40 opacity-20 translate-x-4 translate-y-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none">
                    <path
                      d="M80 20C80 20 70 40 60 50C50 60 40 70 20 80C40 70 50 60 60 50C70 40 80 20 80 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M75 25C75 25 65 40 58 48C52 55 45 62 30 72"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
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
          </section>

          {/* ===== MAIN IMAGE ===== */}
          <section className="py-10 lg:py-16 px-4 md:px-6 lg:px-8">
            <div className=" mx-auto max-w-7xl">
              <div className="rounded-[30px] overflow-hidden shadow-lg">
                <img
                  src={currentBlog.contentImage}
                  alt={currentBlog.title}
                  className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </section>

          {/* ===== ARTICLE CONTENT ===== */}
          <section className="pb-16 lg:pb-24 px-4 md:px-6 lg:px-8">
            <div className=" mx-auto max-w-[1100px]">
              {/* Intro Paragraphs */}
              {currentBlog.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-[#7B798C] text-base lg:text-lg leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}

              {/* Blockquote */}
              <div className="bg-[#1C4942] rounded-[20px] p-8 lg:p-10 my-10 flex flex-col lg:flex-row items-start gap-4">
                <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-white flex-shrink-0" />
                <p className="font-heading text-lg lg:text-xl text-white leading-relaxed">
                  {currentBlog.quote}
                </p>
              </div>

              {/* Subheading */}
              <h2 className="font-heading text-[28px] lg:text-[36px] text-[#1C4942] mb-6 mt-12">
                {currentBlog.subheading}
              </h2>

              {/* Summary */}
              <p className="font-body text-[#7B798C] text-base lg:text-lg leading-relaxed mb-8">
                {currentBlog.summary}
              </p>

              {/* Takeaways List */}
              <ul className="space-y-4 mb-8">
                {currentBlog.takeaways.map((takeaway, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-body text-[#7B798C] text-base lg:text-lg"
                  >
                    <span className="mt-2 w-2 h-2 bg-[#1C4942] rounded-full flex-shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>

              {/* Closing Paragraph */}
              <p className="font-body text-[#7B798C] text-base lg:text-lg leading-relaxed mb-10">
                {currentBlog.closingParagraph}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-16 pb-12 border-b border-[#7B798C]/20">
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
              </div>

              {/* ===== COMMENT FORM ===== */}
              <div className="pt-12">
                <h3 className="font-heading text-[28px] lg:text-[30px] text-[#1C4942] mb-4">
                  Leave a Reply
                </h3>
                <p className="font-body text-[#7B798C] text-base lg:text-lg mb-8">
                  Your email address will not be published. Required fields are marked *
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                  <button
                    type="submit"
                    className="bg-[#24544B] text-white font-body text-base lg:text-lg px-8 py-3 rounded-[24px] hover:bg-[#1C4942] transition-colors duration-300"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </section>


        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetails;
