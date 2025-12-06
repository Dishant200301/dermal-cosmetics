import { Users, Award, Heart, Building2 } from 'lucide-react';

const stats = [
  { icon: <Users className="w-6 h-6" />, value: '96 %', label: 'Patient Satisfaction Rate' },
  { icon: <Award className="w-6 h-6" />, value: '12 +', label: 'Years Of Experience' },
  { icon: <Heart className="w-6 h-6" />, value: '1,000 +', label: 'Successful Surgeries' },
  { icon: <Building2 className="w-6 h-6" />, value: '30 +', label: 'State-Of-The-Art Facilities' },
];

export const StatsRow = () => {
  return (
    <section className="bg-light-pink-100 py-12 border-y border-divider-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                index !== stats.length - 1 ? 'lg:border-r lg:border-divider-gray-200' : ''
              }`}
            >
              <span className="text-deep-green-900 mb-3">{stat.icon}</span>
              <p className="font-heading text-4xl lg:text-5xl text-deep-green-900 mb-2">{stat.value}</p>
              <p className="font-body text-lg text-text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
