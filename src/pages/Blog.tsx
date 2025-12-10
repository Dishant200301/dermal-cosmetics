import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowIcon } from '@/components/icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '@/data/blogData';
import { motion } from 'framer-motion';

const Blog = () => {
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
        <title>Latest Blog - Dermal Dermatology Clinic</title>
        <meta name="description" content="Read the latest skincare tips, treatment guides, and dermatology news from Dermal's expert team." />
      </Helmet>

      <div className="min-h-screen bg-[#FEF7F8]">
        <Header />

        <main className="overflow-hidden">
          {/* Hero Banner */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" mx-auto lg:pb-10 lg:px-8 lg:pt-2"
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
                Blog
              </h1>
              <div className="font-body text-white text-base md:text-lg z-10">
                <a href="/" className="opacity-70">Home</a>
                <span className="mx-2">/</span>
                <span>Blog</span>
              </div>
            </div>
          </motion.section>

          {/* Blog Grid Section */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
              >
                {blogs.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group cursor-pointer"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      {/* Image Container */}
                      <div className="relative rounded-[20px] overflow-hidden mb-4 md:mb-5 h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]">
                        {/* Shine Effect */}
                        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[50deg] transition-all duration-700 ease-in-out z-10 group-hover:left-[200%] pointer-events-none" />

                        <img
                          src={post.mainImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-[#1C4942] text-lg sm:text-[20px] md:text-[22px] leading-snug mb-3 md:mb-4 line-clamp-2 min-h-[52px] sm:min-h-[56px]">
                        {post.title}
                      </h2>

                      {/* Read More Link */}
                      <div className="inline-flex items-center gap-2 font-body font-semibold text-sm sm:text-base md:text-lg text-[#1C4942] group-hover:gap-3 transition-all">
                        Read More
                        <ArrowIcon
                          fill="#1C4942"
                          width={18}
                          height={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
