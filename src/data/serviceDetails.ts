// ============================================================
// TYPE DEFINITIONS
// ============================================================
export interface Service {
  id: string;
  name: string;
  heroImage: string;
  description: string[];
  bulletPoints: string[];
  comprehensiveImages: string[];
  featureCards: FeatureCard[];
  enhancingText: string;
  videoThumbnail: string;
  stats: Stat[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  variant: 'dark' | 'light';
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ============================================================
// SERVICES DATA
// ============================================================
export const services: Service[] = [
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    heroImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=800&fit=crop',
    description: [
      'Dermal fillers are injectable treatments designed to restore volume, smooth wrinkles, and enhance facial contours. They work by replenishing lost hyaluronic acid, a natural substance that keeps skin hydrated and plump.',
      'Our expert dermatologists use FDA-approved fillers to deliver natural-looking results that enhance your features while maintaining your unique beauty. The procedure is minimally invasive with little to no downtime.'
    ],
    bulletPoints: [
      'Immediate visible results',
      'Minimally invasive procedure',
      'Natural-looking enhancement',
      'Long-lasting effects (6-18 months)',
      'FDA-approved products',
      'Minimal downtime required'
    ],
    comprehensiveImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop'
    ],
    featureCards: [
      {
        icon: '🎯',
        title: 'Tailored Treatment Plans',
        description: 'Every skin is unique, and so are our solutions. We create personalized treatment plans designed.',
        variant: 'dark'
      },
      {
        icon: '💎',
        title: 'Advanced Skin Technology',
        description: 'Every skin is unique, and so are our solutions. We create personalized treatment plans designed.',
        variant: 'light'
      },
      {
        icon: '⏱️',
        title: 'Quick Procedure',
        description: 'Most treatments take 30-60 minutes with minimal discomfort and immediate results.',
        variant: 'light'
      },
      {
        icon: '✨',
        title: 'Long-Lasting Results',
        description: 'Enjoy beautiful results that can last from 6 months to over a year depending on the product.',
        variant: 'light'
      }
    ],
    enhancingText: 'Our dermal filler treatments are designed to enhance your natural beauty while maintaining facial harmony. We take a personalized approach to ensure results that look and feel authentic to you.',
    videoThumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
    stats: [
      { icon: '📊', value: '74%', label: 'Patient Satisfaction' },
      { icon: '🏆', value: '13+', label: 'Years Of Experience' },
      { icon: '🏥', value: '17+', label: 'State-Of-The-Art Facilities' }
    ]
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    heroImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=800&fit=crop',
    description: [
      'Chemical peels are advanced skin resurfacing treatments that use carefully formulated acids to remove dead skin cells and reveal fresh, radiant skin underneath. They effectively treat various skin concerns including fine lines, acne scars, and hyperpigmentation.',
      'Our customized chemical peel treatments range from gentle superficial peels to deeper resurfacing options, tailored to your specific skin type and concerns.'
    ],
    bulletPoints: [
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Treats acne and acne scars',
      'Minimizes hyperpigmentation',
      'Stimulates collagen production',
      'Customizable treatment depth'
    ],
    comprehensiveImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop'
    ],
    featureCards: [
      {
        icon: '🔬',
        title: 'Medical-Grade Formulas',
        description: 'We use professional-strength peels that deliver superior results safely and effectively.',
        variant: 'dark'
      },
      {
        icon: '🎨',
        title: 'Customized Approach',
        description: 'Each peel is tailored to your unique skin type, concerns, and desired outcomes.',
        variant: 'light'
      },
      {
        icon: '🌟',
        title: 'Visible Improvement',
        description: 'See noticeable improvements in skin clarity, texture, and overall radiance.',
        variant: 'light'
      },
      {
        icon: '🛡️',
        title: 'Safe & Controlled',
        description: 'Performed by trained professionals in a controlled clinical environment.',
        variant: 'light'
      }
    ],
    enhancingText: 'Chemical peels offer a transformative solution for achieving smoother, more youthful-looking skin. Our expert team ensures a comfortable experience with outstanding results.',
    videoThumbnail: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=600&fit=crop',
    stats: [
      { icon: '📊', value: '74%', label: 'Patient Satisfaction' },
      { icon: '🏆', value: '13+', label: 'Years Of Experience' },
      { icon: '🏥', value: '17+', label: 'State-Of-The-Art Facilities' }
    ]
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment',
    heroImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&h=800&fit=crop',
    description: [
      'Our comprehensive acne treatment programs combine medical expertise with advanced technology to effectively treat acne at its source. We address all types of acne, from mild breakouts to severe cystic acne.',
      'Using a combination of topical treatments, oral medications, and in-office procedures, we create personalized treatment plans that deliver clear, healthy skin.'
    ],
    bulletPoints: [
      'Treats all acne types and severities',
      'Prevents future breakouts',
      'Reduces acne scarring',
      'Personalized treatment plans',
      'Medical-grade products',
      'Long-term skin health focus'
    ],
    comprehensiveImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop'
    ],
    featureCards: [
      {
        icon: '🔍',
        title: 'Root Cause Analysis',
        description: 'We identify underlying causes of acne to create effective, targeted treatment strategies.',
        variant: 'dark'
      },
      {
        icon: '💊',
        title: 'Multi-Modal Approach',
        description: 'Combining topical, oral, and procedural treatments for comprehensive acne management.',
        variant: 'light'
      },
      {
        icon: '📈',
        title: 'Progressive Results',
        description: 'See continuous improvement with our systematic treatment protocols.',
        variant: 'light'
      },
      {
        icon: '🌿',
        title: 'Gentle Yet Effective',
        description: 'Treatments that clear acne while maintaining skin health and barrier function.',
        variant: 'light'
      }
    ],
    enhancingText: 'Clear, confident skin is within reach. Our acne treatment programs are designed to not only clear existing breakouts but prevent future ones for lasting results.',
    videoThumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    stats: [
      { icon: '📊', value: '74%', label: 'Patient Satisfaction' },
      { icon: '🏆', value: '13+', label: 'Years Of Experience' },
      { icon: '🏥', value: '17+', label: 'State-Of-The-Art Facilities' }
    ]
  },
  {
    id: 'skin-tightening',
    name: 'Skin Tightening',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
    description: [
      'Our advanced skin tightening treatments use cutting-edge technology to stimulate collagen production and tighten loose skin without surgery. These non-invasive procedures deliver natural-looking results with no downtime.',
      'Whether you\'re concerned about facial sagging, neck laxity, or body skin tightening, our treatments can help restore a more youthful, lifted appearance.'
    ],
    bulletPoints: [
      'Non-surgical skin lifting',
      'Stimulates collagen production',
      'No downtime required',
      'Natural-looking results',
      'Treats face, neck, and body',
      'Progressive improvement over time'
    ],
    comprehensiveImages: [
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop'
    ],
    featureCards: [
      {
        icon: '⚡',
        title: 'Advanced Technology',
        description: 'State-of-the-art devices that deliver controlled energy for optimal skin tightening.',
        variant: 'dark'
      },
      {
        icon: '🎯',
        title: 'Targeted Treatment',
        description: 'Precisely target areas of concern for customized skin tightening results.',
        variant: 'light'
      },
      {
        icon: '⏰',
        title: 'No Downtime',
        description: 'Resume normal activities immediately after treatment with no recovery period.',
        variant: 'light'
      },
      {
        icon: '📅',
        title: 'Long-Term Benefits',
        description: 'Results continue to improve over months as new collagen forms.',
        variant: 'light'
      }
    ],
    enhancingText: 'Turn back the clock without surgery. Our skin tightening treatments offer a safe, effective way to achieve firmer, more youthful-looking skin.',
    videoThumbnail: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&h=600&fit=crop',
    stats: [
      { icon: '📊', value: '74%', label: 'Patient Satisfaction' },
      { icon: '🏆', value: '13+', label: 'Years Of Experience' },
      { icon: '🏥', value: '17+', label: 'State-Of-The-Art Facilities' }
    ]
  },
  {
    id: 'scar-revision',
    name: 'Scar Revision',
    heroImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&h=800&fit=crop',
    description: [
      'Scar revision treatments help minimize the appearance of scars from acne, surgery, injury, or other causes. We use a combination of advanced techniques including laser therapy, microneedling, and injectable treatments.',
      'Our comprehensive approach addresses both the texture and color of scars, helping them blend more naturally with surrounding skin for improved appearance and confidence.'
    ],
    bulletPoints: [
      'Treats various scar types',
      'Improves texture and color',
      'Minimally invasive options',
      'Customized treatment plans',
      'Progressive improvement',
      'Suitable for all skin types'
    ],
    comprehensiveImages: [
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop'
    ],
    featureCards: [
      {
        icon: '🔧',
        title: 'Multi-Technique Approach',
        description: 'Combining laser, microneedling, and injectables for comprehensive scar improvement.',
        variant: 'dark'
      },
      {
        icon: '🎨',
        title: 'Texture Refinement',
        description: 'Smooth out raised or depressed scars for more even skin texture.',
        variant: 'light'
      },
      {
        icon: '🌈',
        title: 'Color Correction',
        description: 'Address discoloration to help scars blend with surrounding skin tone.',
        variant: 'light'
      },
      {
        icon: '💪',
        title: 'Confidence Restoration',
        description: 'Regain confidence with visibly improved skin appearance.',
        variant: 'light'
      }
    ],
    enhancingText: 'Scars don\'t have to be permanent. Our scar revision treatments can significantly improve their appearance, helping you feel more confident in your skin.',
    videoThumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
    stats: [
      { icon: '📊', value: '74%', label: 'Patient Satisfaction' },
      { icon: '🏆', value: '13+', label: 'Years Of Experience' },
      { icon: '🏥', value: '17+', label: 'State-Of-The-Art Facilities' }
    ]
  },
  {
    id: 'wrinkle-reduction',
    name: 'Wrinkle Reduction',
    heroImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=800&fit=crop',
    description: [
      'Our wrinkle reduction treatments combine the latest anti-aging technologies to smooth fine lines and wrinkles, restoring a more youthful appearance. We offer both injectable and non-injectable options to suit your preferences.',
      'From Botox and dermal fillers to laser resurfacing and microneedling, our comprehensive approach targets wrinkles at multiple levels for optimal, natural-looking results.'
    ],
    bulletPoints: [
      'Multiple treatment options available',
      'Targets dynamic and static wrinkles',
      'Natural-looking rejuvenation',
      'Minimal to no downtime',
      'Long-lasting results',
      'Preventative and corrective care'
    ],
    comprehensiveImages: [
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    ],
    featureCards: [
      {
        icon: '💉',
        title: 'Injectable Expertise',
        description: 'Expert administration of Botox and fillers for smooth, natural results.',
        variant: 'dark'
      },
      {
        icon: '🔆',
        title: 'Laser Technology',
        description: 'Advanced laser treatments that stimulate collagen and reduce wrinkles.',
        variant: 'light'
      },
      {
        icon: '🎭',
        title: 'Expression Preservation',
        description: 'Maintain natural facial expressions while smoothing unwanted lines.',
        variant: 'light'
      },
      {
        icon: '🕐',
        title: 'Preventative Care',
        description: 'Start early to prevent deep wrinkles from forming over time.',
        variant: 'light'
      }
    ],
    enhancingText: 'Age gracefully with our comprehensive wrinkle reduction treatments. We help you maintain a refreshed, youthful appearance while preserving your natural expressions.',
    videoThumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&h=600&fit=crop',
    stats: [
      { icon: '📊', value: '74%', label: 'Patient Satisfaction' },
      { icon: '🏆', value: '13+', label: 'Years Of Experience' },
      { icon: '🏥', value: '17+', label: 'State-Of-The-Art Facilities' }
    ]
  },
  
];

export const faqItems: FAQItem[] = [
  {
    question: 'What types of treatments do you offer?',
    answer: 'We offer a comprehensive range of dermatological treatments including dermal fillers, chemical peels, acne treatment, skin tightening, scar revision, wrinkle reduction, laser therapy, and more. Each treatment is customized to your specific skin concerns and goals.'
  },
  {
    question: 'Do I need a consultation before getting treatment?',
    answer: 'Yes, we require an initial consultation for all new patients. This allows our dermatologists to assess your skin, discuss your concerns and goals, and create a personalized treatment plan that\'s right for you.'
  },
  {
    question: 'Are your treatments suitable for all skin types?',
    answer: 'Absolutely! Our experienced dermatologists are trained to work with all skin types and tones. We customize each treatment protocol to ensure safety and effectiveness for your unique skin characteristics.'
  },
  {
    question: 'Do you offer cosmetic dermatology services?',
    answer: 'Yes, we specialize in both medical and cosmetic dermatology. Our cosmetic services include anti-aging treatments, skin rejuvenation, body contouring, and aesthetic enhancements designed to help you look and feel your best.'
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'During your first visit, you\'ll meet with one of our dermatologists for a comprehensive skin assessment. We\'ll discuss your medical history, current concerns, and aesthetic goals. Based on this consultation, we\'ll recommend a personalized treatment plan and answer any questions you may have.'
  },
  
];
