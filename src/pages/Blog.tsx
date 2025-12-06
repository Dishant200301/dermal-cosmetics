import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowIcon } from '@/components/icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '@/data/blogData';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Latest Blog - Dermal Dermatology Clinic</title>
        <meta name="description" content="Read the latest skincare tips, treatment guides, and dermatology news from Dermal's expert team." />
      </Helmet>

      <div className="min-h-screen bg-[#FEF7F8]">
        <Header />

        <main className="mx-auto max-w-[1440px] lg:px-0">
          {/* Hero Banner */}
          <section className="lg:pt-12 pb-8 lg:pb-24">
            <div className="relative bg-[#24544B] h-[200px] md:h-[240px] flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative Leaf - Top Left */}
              <svg
                className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20 80C20 80 30 60 40 50C50 40 60 30 80 20C60 30 50 40 40 50C30 60 20 80 20 80Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M25 75C25 75 35 60 42 52C48 45 55 38 70 28"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M22 78C22 78 28 68 35 60"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* Decorative Leaf - Bottom Right */}
              <svg
                className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-24 md:h-24 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M80 20C80 20 70 40 60 50C50 60 40 70 20 80C40 70 50 60 60 50C70 40 80 20 80 20Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M75 25C75 25 65 40 58 48C52 55 45 62 30 72"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M78 22C78 22 72 32 65 40"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* Hero Content */}
              <div className="relative z-10 text-center">
                <h1 className="font-heading text-white text-[32px] md:text-[40px] lg:text-[48px] mb-3 md:mb-4">
                  Latest blog
                </h1>
                <div className="font-body text-white text-sm md:text-base">
                  <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">
                    Home
                  </Link>
                  <span className="mx-2">/</span>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Grid Section */}
          <section className="pb-16 lg:pb-24 px-3  lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {blogs.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Image Container */}
                    <div className="rounded-[20px] overflow-hidden mb-5 h-[240px] md:h-[280px] relative">
                      <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-[#1C4942] text-[20px] md:text-[22px] leading-snug mb-4 line-clamp-2 min-h-[56px]">
                      {post.title}
                    </h2>

                    {/* Read More Link */}
                    <div className="inline-flex items-center gap-2 font-body font-semibold text-base md:text-lg text-[#1C4942] group-hover:gap-3 transition-all">
                      Read More
                      <ArrowIcon
                        fill="#1C4942"
                        width={18}
                        height={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
