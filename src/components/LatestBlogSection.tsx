import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog Item Component
interface BlogItemProps {
    image: string;
    title: string;
    slug: string;
}

const BlogItem = ({ image, title, slug }: BlogItemProps) => {
    return (
        <Link
            to={`/blog/${slug}`}
            className="group bg-white rounded-[30px] overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
        >
            {/* Blog Image */}
            <div className="h-[240px] w-full overflow-hidden rounded-[30px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        <section className="bg-[#F7F0F2] rounded-[30px] mx-6 lg:mx-20 py-16 lg:py-[100px] flex flex-col items-center">
            <div className="w-full max-w-[1280px] px-6 lg:px-[60px]">
                {/* Section Label */}
                <div className="flex items-center justify-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#24544B]"></div>
                    <span className="font-body text-[#7B798C] text-base font-medium">
                        Latest Blog
                    </span>
                </div>

                {/* Main Heading */}
                <h2
                    className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] text-center max-w-[800px] mx-auto mb-5"
                    style={{ letterSpacing: '-1px' }}
                >
                    New insights: read our latest posts for skin care tips
                </h2>

                {/* Sub Text */}
                <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed text-center max-w-[700px] mx-auto mb-12 lg:mb-[70px]">
                    Read our latest posts for fresh insights on skin care. Our articles
                    cover everything from common dermatological concerns.
                </p>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {blogPosts.map((post, index) => (
                        <BlogItem
                            key={index}
                            image={post.image}
                            title={post.title}
                            slug={post.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
