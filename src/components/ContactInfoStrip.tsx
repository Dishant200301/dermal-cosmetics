import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Contact Us',
    lines: ['Email: info@domain.com', 'Phone: (123) 465 – 798'],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Our Location',
    lines: ['4517 Washington Ave. Manchester,', 'Kentucky 39495'],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Working Hours',
    lines: ['Monday – Friday : 9:00 am to 6:00 pm', 'Saturday : 11:00 am to 5pm'],
  },
];

export const ContactInfoStrip = () => {
  return (
    <section className="bg-light-pink-100 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
          {contactItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center md:items-start md:text-left ${
                index !== contactItems.length - 1
                  ? 'md:border-r md:border-divider-gray-200 md:pr-8'
                  : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-deep-green-900">{item.icon}</span>
                <h3 className="font-heading text-xl text-deep-green-900">{item.title}</h3>
              </div>
              {item.lines.map((line, i) => (
                <p key={i} className="font-body text-lg text-text-gray-400">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
