export interface ServiceData {
  id: string;
  name: string;
  icon: string;
  description: string;
  processSteps: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
}

// Lit Noel Holiday Lighting Services
export const services: Record<string, ServiceData> = {
  'christmas-light-installation': {
    id: 'christmas-light-installation',
    name: 'Christmas Light Installation',
    icon: '✨',
    description: 'Transform your property into a magical winter wonderland with our professional Christmas light installation services. We design custom lighting displays tailored to your home or business, using commercial-grade LED lights and professional installation techniques.',
    processSteps: [
      {
        title: 'Design Consultation',
        description: 'We visit your property to discuss your vision and create a custom lighting design plan.',
        icon: '1'
      },
      {
        title: 'Professional Installation',
        description: 'Our trained team safely installs your lights using proper equipment and weather-resistant connections.',
        icon: '2'
      },
      {
        title: 'Quality Testing',
        description: 'We test all lights and connections to ensure everything works perfectly before we finish.',
        icon: '3'
      },
      {
        title: 'Final Walkthrough',
        description: 'We review the completed installation with you and set up automatic timers for convenience.',
        icon: '4'
      }
    ],
    benefits: [
      {
        title: 'Safe & Professional',
        description: 'No dangerous ladder climbing or electrical hazards - we handle everything safely.',
        icon: '✓'
      },
      {
        title: 'Custom Design',
        description: 'Every installation is tailored to your property and preferences for stunning results.',
        icon: '✓'
      },
      {
        title: 'Commercial-Grade Lights',
        description: 'We use high-quality LED lights that are brighter, longer-lasting, and energy-efficient.',
        icon: '✓'
      },
      {
        title: 'Weather-Resistant',
        description: 'Professional-grade outdoor equipment designed to withstand winter weather.',
        icon: '✓'
      }
    ],
    faqItems: [
      {
        question: 'How long does installation take?',
        answer: 'Most residential installations take 3-6 hours depending on the size and complexity of the design. Larger commercial projects may take a full day.'
      },
      {
        question: 'What if bad weather affects my installation date?',
        answer: 'We monitor weather closely and will reschedule if conditions are unsafe. We work around weather to ensure quality installation.'
      },
      {
        question: 'Do you provide the lights or do I need to buy them?',
        answer: 'We provide high‑quality, commercial‑grade LED lights and all installation materials. You don’t need to buy anything.'
      },
      {
        question: 'Can you work around my schedule?',
        answer: 'Absolutely! We offer flexible scheduling including evenings and weekends to fit your needs.'
      }
    ]
  },
  
  'maintenance-support': {
    id: 'maintenance-support',
    name: 'Maintenance & Support',
    icon: '🔧',
    description: 'Keep your holiday display looking perfect all season long with our comprehensive maintenance and support service. We\'re on-call throughout the holidays to fix any issues quickly.',
    processSteps: [
      {
        title: 'Regular Check-ins',
        description: 'We proactively monitor your display and perform routine maintenance visits.',
        icon: '1'
      },
      {
        title: 'Quick Response',
        description: 'Call us anytime during the season and we\'ll respond quickly to any issues.',
        icon: '2'
      },
      {
        title: 'Professional Repairs',
        description: 'We fix or replace any damaged lights or decorations using professional equipment.',
        icon: '3'
      },
      {
        title: 'Weather Protection',
        description: 'After storms or severe weather, we check your display and make any needed repairs.',
        icon: '4'
      }
    ],
    benefits: [
      {
        title: 'Always Picture-Perfect',
        description: 'Your display stays beautiful all season with our proactive maintenance.',
        icon: '✓'
      },
      {
        title: 'Peace of Mind',
        description: 'No worrying about climbing ladders or dealing with electrical issues yourself.',
        icon: '✓'
      },
      {
        title: 'Fast Response Time',
        description: 'We respond quickly to service calls so dark sections don\'t stay dark long.',
        icon: '✓'
      },
      {
        title: 'Included Service',
        description: 'Maintenance is included with all our installations - no surprise fees.',
        icon: '✓'
      }
    ],
    faqItems: [
      {
        question: 'What if some lights go out during the season?',
        answer: 'Just call us! We\'ll come out quickly to diagnose and fix the problem, whether it\'s a loose connection or damaged lights.'
      },
      {
        question: 'Do you charge extra for maintenance calls?',
        answer: 'No, maintenance and support are included in all our service packages. You only pay the initial installation fee.'
      },
      {
        question: 'What about weather damage?',
        answer: 'We check displays after severe weather and repair any storm damage at no additional cost.'
      },
      {
        question: 'How quickly do you respond to service calls?',
        answer: 'We typically respond within 24 hours, often same-day, to keep your display looking its best.'
      }
    ]
  },
  'post-season-removal': {
    id: 'post-season-removal',
    name: 'Post-Season Removal',
    icon: '📦',
    description: 'After the holidays, we safely remove all lights and decorations, leaving your property exactly as we found it. No climbing ladders in cold weather or dealing with tangled lights.',
    processSteps: [
      {
        title: 'Scheduled Removal',
        description: 'We schedule removal at your convenience, typically in early January.',
        icon: '1'
      },
      {
        title: 'Careful Takedown',
        description: 'We safely remove all lights and decorations without damaging your property.',
        icon: '2'
      },
      {
        title: 'Complete Cleanup',
        description: 'We remove all clips, extension cords, and equipment, leaving no trace behind.',
        icon: '3'
      },
      
    ],
    benefits: [
      {
        title: 'Safe Removal',
        description: 'No dangerous ladder work in cold, icy conditions - we handle it all safely.',
        icon: '✓'
      },
      {
        title: 'Property Protection',
        description: 'We carefully remove everything without damage to roofing, gutters, or landscaping.',
        icon: '✓'
      },
      {
        title: 'Complete Service',
        description: 'We remove everything - lights, clips, cords, timers, and decorations.',
        icon: '✓'
      },
      {
        title: 'Flexible Timing',
        description: 'We work with your schedule and any HOA requirements for removal dates.',
        icon: '✓'
      }
    ],
    faqItems: [
      {
        question: 'When do you remove the lights?',
        answer: 'We typically schedule removal in early January, but we can work with your preferences and any HOA requirements.'
      },
      {
        question: 'Do I need to be home for removal?',
        answer: 'No, you don\'t need to be present. We\'ll confirm the timing with you and handle everything professionally.'
      },
      {
        question: 'What about my own decorations mixed in?',
        answer: 'We carefully identify and separate any of your personal decorations, leaving them neatly for you.'
      },
      {
        question: 'Is removal included in the service fee?',
        answer: 'Yes! Removal is always included in our full-service packages. No hidden fees or surprise charges.'
      }
    ]
  },
  'design-consultation': {
    id: 'design-consultation',
    name: 'Design Consultation',
    icon: '🎨',
    description: 'Work with our lighting design experts to create the perfect holiday display for your property. We provide professional consultation and free estimates for all projects.',
    processSteps: [
      {
        title: 'Property Assessment',
        description: 'We visit your property to assess the architecture and discuss your vision.',
        icon: '1'
      },
      {
        title: 'Custom Design',
        description: 'We create a detailed lighting plan tailored to your style and budget.',
        icon: '2'
      },
      {
        title: 'Free Estimate',
        description: 'You receive a detailed quote with transparent pricing and no hidden fees.',
        icon: '3'
      },
      {
        title: 'Design Refinement',
        description: 'We refine the design based on your feedback to ensure it\'s exactly what you want.',
        icon: '4'
      }
    ],
    benefits: [
      {
        title: 'Expert Design Advice',
        description: 'Benefit from our experience creating stunning displays for hundreds of properties.',
        icon: '✓'
      },
      {
        title: 'Personalized Plans',
        description: 'Every design is customized to your property\'s unique features and your preferences.',
        icon: '✓'
      },
      {
        title: 'Transparent Pricing',
        description: 'Detailed estimates with no surprises - you know exactly what you\'re getting.',
        icon: '✓'
      },
      {
        title: 'No Obligation',
        description: 'Free consultation and estimate with no pressure to commit.',
        icon: '✓'
      }
    ],
    faqItems: [
      {
        question: 'Is the consultation really free?',
        answer: 'Yes! We provide free consultations and estimates for all potential projects, with no obligation to proceed.'
      },
      {
        question: 'How long does the design process take?',
        answer: 'Most consultations take 30-60 minutes on-site, and we typically provide estimates within 24-48 hours.'
      },
      {
        question: 'Can you work within my budget?',
        answer: 'Absolutely! We can scale designs to fit various budgets and will provide options at different price points.'
      },
      {
        question: 'What if I want to change the design later?',
        answer: 'We\'re happy to adjust designs based on your feedback. Minor changes are no problem during the planning phase.'
      }
    ]
  },
  'commercial-services': {
    id: 'commercial-services',
    name: 'Commercial Services',
    icon: '🏢',
    description: 'Create a welcoming, festive atmosphere for your business with professional commercial holiday lighting. We work with retail stores, restaurants, offices, and shopping centers to attract customers and spread holiday cheer.',
    processSteps: [
      {
        title: 'Business Assessment',
        description: 'We evaluate your commercial property and discuss your business goals and branding.',
        icon: '1'
      },
      {
        title: 'Commercial Design',
        description: 'We create a professional lighting plan that enhances your business image.',
        icon: '2'
      },
      {
        title: 'Flexible Installation',
        description: 'We install during off-hours or at times that don\'t disrupt your business operations.',
        icon: '3'
      },
      {
        title: 'Ongoing Support',
        description: 'Regular maintenance throughout the season to keep your business looking professional.',
        icon: '4'
      }
    ],
    benefits: [
      {
        title: 'Attract Customers',
        description: 'Beautiful holiday displays draw customers and create a welcoming atmosphere.',
        icon: '✓'
      },
      {
        title: 'Professional Image',
        description: 'High-quality lighting installations enhance your business\'s professional appearance.',
        icon: '✓'
      },
      {
        title: 'Flexible Scheduling',
        description: 'We work around your business hours to minimize disruption to operations.',
        icon: '✓'
      },
      {
        title: 'Scalable Solutions',
        description: 'From small storefronts to large shopping centers, we handle projects of any size.',
        icon: '✓'
      }
    ],
    faqItems: [
      {
        question: 'Do you work during business hours?',
        answer: 'We prefer to install during off-hours to avoid disrupting your business, but we can work around your schedule as needed.'
      },
      {
        question: 'Can you handle large commercial properties?',
        answer: 'Yes! We scale our team as needed for large projects like shopping centers, office complexes, and retail chains.'
      },
      {
        question: 'Do you provide commercial insurance certificates?',
        answer: 'Absolutely. We can provide certificates of insurance and meet any contractor requirements for commercial work.'
      },
      {
        question: 'Can you incorporate our business branding?',
        answer: 'Yes! We can work with your brand colors and create displays that complement your business image and signage.'
      }
    ]
  }
};

export const getService = (serviceId: string): ServiceData | undefined => {
  return services[serviceId];
};