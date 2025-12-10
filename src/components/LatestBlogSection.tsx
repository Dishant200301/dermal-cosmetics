import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageWithShine from './ImageWithShine';

// ====================================================================
// FRAMER MOTION VARIANTS (Defined once for reuse)
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
            staggerChildren: 0.15, // Delay between the start of each child's animation
        }
    }
};

// Blog Item Component (Wrapped in motion.div to receive stagger timing)
interface BlogItemProps {
    image: string;
    title: string;
    slug: string;
}

const BlogItem = ({ image, title, slug }: BlogItemProps) => {
    return (
        <motion.div variants={fadeInUp}>
            <Link
                to={`/blog/${slug}`}
                className="group xl:rounded-30 lg:rounded-[30px] overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            >
                {/* Blog Image */}
                <div className="h-[240px] w-full overflow-hidden rounded-[30px]">
                    <ImageWithShine
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        rounded="rounded-[30px]"
                    />
                </div>

                {/* Blog Title */}
                <h3 className="font-heading text-[#1C4942] text-[22px] leading-[28px] mt-5 px-2.5">
                    {title}
                </h3>

                {/* Blog Footer - Read More */}
                <div className="flex items-center gap-1.5 font-body text-base font-medium text-[#24544B] mt-4 px-2.5 pb-5">
                    <span>Read More</span>
                    <ArrowRight className="w-[18px] h-[18px]" />
                </div>
            </Link>
        </motion.div>
    );
};

// Blog Data
const blogPosts = [
    {
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
        title: 'How to Care for Your Skin After a Botox Treatment',
        slug: 'how-to-care-for-skin-after-botox',
    },
    {
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
        title: 'Understanding the Causes of Acne and How to Treat It',
        slug: 'understanding-causes-of-acne',
    },
    {
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
        title: 'Why Regular Skin Cancer Screenings Are Important',
        slug: 'why-skin-cancer-screenings-important',
    },
];

export const LatestBlogSection = () => {
    return (
        <section className="bg-[#fef7f8] mx-4 lg:mx-0 py-16 lg:py-[100px] flex flex-col items-center">
            <div className="w-full max-w-[1200px] px-0 lg:px-[0px]">
                {/* Header Section (STAGGER CONTAINER 1) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {/* 1. Section Label */}
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-5">
                        <div className="w-2 h-2 rounded-full bg-[#24544B]"></div>
                        <span className="font-body text-[#7B798C] text-base font-medium">
                            Latest Blog
                        </span>
                    </motion.div>

                    {/* 2. Main Heading */}
                    <motion.h2
                        variants={fadeInUp}
                        className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] text-center max-w-[800px] mx-auto mb-5"
                        style={{ letterSpacing: '-1px' }}
                    >
                        New insights: read our latest posts for skin care tips
                    </motion.h2>

                    {/* 3. Sub Text */}
                    <motion.p variants={fadeInUp} className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed text-center max-w-[700px] mx-auto mb-12 lg:mb-[70px]">
                        Read our latest posts for fresh insights on skin care. Our articles
                        cover everything from common dermatological concerns.
                    </motion.p>
                </motion.div>

                {/* Blog Grid (STAGGER CONTAINER 2) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {blogPosts.map((post, index) => (
                        <BlogItem
                            key={index}
                            image={post.image}
                            title={post.title}
                            slug={post.slug}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
