// Team Card Component
interface TeamCardProps {
    image: string;
    name: string;
    specialty: string;
}

const TeamCard = ({ image, name, specialty }: TeamCardProps) => {
    return (
        <div className="relative w-full h-[427px] rounded-[24px] overflow-hidden group">
            {/* Team Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(28, 73, 66, 0) 43%, #1C4942 100%)',
                }}
            />

            {/* Doctor Info */}
            <div className="absolute bottom-10 w-full text-center px-4">
                <h3 className="font-heading text-white text-[22px] mb-2">{name}</h3>
                <p className="font-body text-white text-lg leading-relaxed">{specialty}</p>
            </div>
        </div>
    );
};

// Section Header Component
const SectionHeader = () => {
    return (
        <div className="text-center mb-16">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-2.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7B798C]"></div>
                <span className="font-body text-[#7B798C] text-base font-medium">
                    Our Expert Team
                </span>
            </div>

            {/* Main Heading */}
            <h2
                className="font-heading text-[#1C4942] text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[55px] max-w-[810px] mx-auto mb-5"
                style={{ letterSpacing: '-1px' }}
            >
                Our expert team: committed to your skin health and beauty
            </h2>

            {/* Sub Text */}
            <p className="font-body text-[#7B798C] text-base md:text-lg leading-relaxed max-w-[615px] mx-auto">
                Our team of dermatology professionals is dedicated to providing you with
                the highest quality care. With years of experience.
            </p>
        </div>
    );
};

// Team Data
const teamMembers = [
    {
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Kathryn Murphy',
        specialty: 'Anesthesiology',
    },
    {
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Kristin Watson',
        specialty: 'Infectious Disease',
    },
    {
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Arlene Mccoy',
        specialty: 'Cardiology',
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face',
        name: 'Dr. Jenny Wilson',
        specialty: 'Anesthesiology',
    },
];

export const ExpertTeamSection = () => {
    return (
        <section className="relative bg-[#fef7f8] lg:px-0 xl:py-20">
            <div className="lg:bg-[#f7f0f2] md:bg-[#f7f0f2] md:rounded-[30px] lg:rounded-[30px] xl:rounded-[30px] mx-6 lg:mx-4 py-24 lg:py-[80px] overflow-hidden">
            {/* Decorative Leaf - Left Bottom */}
            <svg
                className="absolute left-0 bottom-8 w-32 h-32 lg:w-[150px] lg:h-[150px] opacity-20"
                viewBox="0 0 150 150"
                fill="none"
            >
                <path
                    d="M30 120C30 120 50 90 70 70C90 50 110 30 130 20C110 30 90 50 70 70C50 90 30 120 30 120Z"
                    stroke="#1C4942"
                    strokeWidth="2.5"
                    fill="none"
                />
                <path
                    d="M40 110C40 110 55 90 70 75C85 60 100 45 115 35"
                    stroke="#1C4942"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                />
            </svg>

            {/* Decorative Leaf - Right Top */}
            <svg
                className="absolute right-0 top-8 w-32 h-32 lg:w-[150px] lg:h-[150px] opacity-20"
                viewBox="0 0 150 150"
                fill="none"
            >
                <path
                    d="M120 30C120 30 100 60 80 80C60 100 40 120 20 130C40 120 60 100 80 80C100 60 120 30 120 30Z"
                    stroke="#1C4942"
                    strokeWidth="2.5"
                    fill="none"
                />
                <path
                    d="M110 40C110 40 95 60 80 75C65 90 50 105 35 115"
                    stroke="#1C4942"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                />
            </svg>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1280px] mx-auto md:px-6 lg:px-[40px] xl:px-[0px]">
                {/* Section Header */}
                <SectionHeader />

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            specialty={member.specialty}
                        />
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
};
